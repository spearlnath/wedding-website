const { lighthouse, loadAndLaunchChrome } = require('lighthouse');

async function runLighthouse() {
    const chrome = await loadAndLaunchChrome();
    const { lhr } = await lighthouse('http://127.0.0.1:5500/Wedding%20Website%20Trial%202/', {
        port: chrome.port,
    });
    console.log('Lighthouse score:', lhr.categories.performance.score);
    await chrome.kill();
}

runLighthouse();