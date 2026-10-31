import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  if (urlPath === '/practice-test/1') urlPath = '/practice-test/1.html';

  let filePath = path.join(process.cwd(), 'dist/client', urlPath);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(process.cwd(), urlPath);
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

server.listen(9878, async () => {
  const chrome = spawn('google-chrome', [
    '--headless=new',
    '--remote-debugging-port=9226',
    '--no-sandbox',
    '--disable-gpu',
    '--window-size=1400,900',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetUrl = 'http://127.0.0.1:9878/practice-test/1';
    const newTabRes = await fetch(`http://127.0.0.1:9226/json/new?${encodeURIComponent(targetUrl)}`, { method: 'PUT' });
    const tab = await newTabRes.json();
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise((resolve) => {
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Page.enable' }));
        resolve();
      };
    });

    await new Promise(r => setTimeout(r, 4000));

    // Dispatch selection in iframe
    await new Promise((resolve) => {
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 10) resolve();
      };
      ws.send(JSON.stringify({
        id: 10,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            window.postMessage({
              type: 'WORDNEST_QUICK_TRANSLATE',
              text: 'absorb',
              rect: { top: 280, left: 240, width: 70, height: 20, bottom: 300 },
              source: 'pdfjs'
            }, '*');
          `
        }
      }));
    });

    // Wait 1.5s for translation
    await new Promise(r => setTimeout(r, 1500));

    // Capture screenshot
    await new Promise((resolve) => {
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.id === 20) {
          fs.writeFileSync('scripts/quick-translate-screenshot.png', Buffer.from(data.result.data, 'base64'));
          console.log('✓ Screenshot saved to scripts/quick-translate-screenshot.png');
          resolve();
        }
      };
      ws.send(JSON.stringify({ id: 20, method: 'Page.captureScreenshot', params: { format: 'png' } }));
    });

    ws.close();
    await fetch(`http://127.0.0.1:9226/json/close/${tab.id}`);
  } finally {
    chrome.kill();
    server.close();
  }
});
