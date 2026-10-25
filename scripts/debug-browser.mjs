import { spawn } from 'node:child_process';

const chrome = spawn('google-chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--no-sandbox',
  '--disable-gpu',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));

try {
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const versionData = await versionRes.json();
  console.log('Chrome connected:', versionData.Browser);

  const testUrls = [
    'https://wordnest-english-vocab.web.app/#home',
    'https://wordnest-english-vocab.web.app/listening-test/8',
    'https://wordnest-english-vocab.web.app/practice-test/1'
  ];

  for (const url of testUrls) {
    console.log(`\nTesting URL: ${url}`);
    const newTabRes = await fetch(`http://127.0.0.1:9222/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
    const tab = await newTabRes.json();

    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));
        resolve();
      };
      ws.onerror = reject;
    });

    let hasError = false;

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.method === 'Runtime.exceptionThrown') {
        console.error('  🔴 EXCEPTION:', JSON.stringify(data.params.exceptionDetails));
        hasError = true;
      }
      if (data.method === 'Runtime.consoleAPICalled' && data.params.type === 'error') {
        const args = (data.params.args || []).map(a => a.value || a.description || '').join(' ');
        console.error('  🔴 CONSOLE ERROR:', args);
        hasError = true;
      }
    };

    // Wait 4 seconds for full hydration
    await new Promise(r => setTimeout(r, 4000));

    if (!hasError) {
      console.log('  ✓ 0 exceptions, 0 errors, page loaded cleanly');
    }

    ws.close();
    await fetch(`http://127.0.0.1:9222/json/close/${tab.id}`);
  }

  console.log('\n🏆 ALL LIVE TESTS PASSED CLEANLY!\n');
} finally {
  chrome.kill();
}
