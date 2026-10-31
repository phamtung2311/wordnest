import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

// Simple static server for dist/client
const server = http.createServer((req, res) => {
  let filePath = path.join(process.cwd(), req.url.split('?')[0]);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), 'dist/client', req.url.split('?')[0]);
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const mime = ext === '.html' ? 'text/html' : ext === '.js' ? 'application/javascript' : ext === '.pdf' ? 'application/pdf' : ext === '.css' ? 'text/css' : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(9876, async () => {
  console.log('Test server running on http://127.0.0.1:9876');

  const chrome = spawn('google-chrome', [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1200,800',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetUrl = 'http://127.0.0.1:9876/dist/client/pdfjs/web/viewer.html?file=/tests/test1.pdf#page=3';
    const newTabRes = await fetch(`http://127.0.0.1:9224/json/new?${encodeURIComponent(targetUrl)}`, { method: 'PUT' });
    const tab = await newTabRes.json();
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise((resolve) => {
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Page.enable' }));
        resolve();
      };
    });

    // Wait 5 seconds for PDF.js to render page 3 textLayer
    await new Promise(r => setTimeout(r, 5000));

    // Check DOM for textLayer
    const evalPromise = new Promise((resolve) => {
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 5) {
          resolve(msg.result?.result?.value);
        }
      };
      ws.send(JSON.stringify({
        id: 5,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const textLayers = document.querySelectorAll('.textLayer');
              const spans = document.querySelectorAll('.textLayer span');
              const texts = Array.from(spans).map(s => s.textContent.trim()).filter(Boolean);
              return {
                textLayersCount: textLayers.length,
                spansCount: spans.length,
                sampleTexts: texts.slice(0, 15)
              };
            })()
          `,
          returnByValue: true
        }
      }));
    });

    const result = await evalPromise;
    console.log('Result from PDF.js viewer:', result);

    ws.close();
    await fetch(`http://127.0.0.1:9224/json/close/${tab.id}`);
  } finally {
    chrome.kill();
    server.close();
  }
});
