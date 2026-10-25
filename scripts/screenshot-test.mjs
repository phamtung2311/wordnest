import { spawn } from 'node:child_process';
import fs from 'node:fs';

const chrome = spawn('google-chrome', [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1440,900',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));

try {
  const newTabRes = await fetch('http://127.0.0.1:9223/json/new?https://wordnest-english-vocab.web.app/listening-test/8', { method: 'PUT' });
  const tab = await newTabRes.json();

  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  await new Promise((resolve) => {
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      resolve();
    };
  });

  // Wait 4 seconds for full render
  await new Promise(r => setTimeout(r, 4000));

  await new Promise((resolve) => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 10) {
        fs.writeFileSync('scripts/live-listening-test-8.png', Buffer.from(data.result.data, 'base64'));
        console.log('✓ Screenshot saved to scripts/live-listening-test-8.png');
        resolve();
      }
    };
    ws.send(JSON.stringify({ id: 10, method: 'Page.captureScreenshot', params: { format: 'png' } }));
  });

  ws.close();
  await fetch(`http://127.0.0.1:9223/json/close/${tab.id}`);
} finally {
  chrome.kill();
}
