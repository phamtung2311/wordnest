import { spawn } from 'node:child_process';
import fs from 'node:fs';

const chrome = spawn('google-chrome', [
  '--headless=new',
  '--remote-debugging-port=9224',
  '--no-sandbox',
  '--disable-gpu',
  '--window-size=1440,900',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));

try {
  const newTabRes = await fetch('http://127.0.0.1:9224/json/new?https://wordnest-english-vocab.web.app/#home', { method: 'PUT' });
  const tab = await newTabRes.json();

  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  await new Promise((resolve) => {
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
      resolve();
    };
  });

  // Wait 3.5s for page to load and hydrate
  await new Promise(r => setTimeout(r, 3500));

  // Click the stopwatch pill
  await new Promise((resolve) => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 5) resolve();
    };
    ws.send(JSON.stringify({
      id: 5,
      method: 'Runtime.evaluate',
      params: {
        expression: `
          const pill = document.querySelector('[title*="đồng hồ bấm giờ"]') || document.querySelector('.font-mono');
          if (pill) {
            pill.click();
            true;
          } else false;
        `
      }
    }));
  });

  // Wait 1s for popup animation
  await new Promise(r => setTimeout(r, 1000));

  await new Promise((resolve) => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === 10) {
        fs.writeFileSync('scripts/live-stopwatch-popup.png', Buffer.from(data.result.data, 'base64'));
        console.log('✓ Screenshot saved to scripts/live-stopwatch-popup.png');
        resolve();
      }
    };
    ws.send(JSON.stringify({ id: 10, method: 'Page.captureScreenshot', params: { format: 'png' } }));
  });

  ws.close();
  await fetch(`http://127.0.0.1:9224/json/close/${tab.id}`);
} finally {
  chrome.kill();
}
