import puppeteer from 'puppeteer-core';
import launch from 'lighthouse';

async function runLighthouseWithPuppeteer() {
    try {
        const browser = await puppeteer.launch({ 
            executablePath: '/path/to/chrome', // Specify the path to your Chrome executable
            headless: true // Launch Chrome in headless mode
        });

        const url = 'http://localhost:5500/Wedding%20Website%20Trial%202/';
        const { port } = await browser.wsEndpoint();
        
        const lighthouseResult = await launch(url, { port });

        console.log('Lighthouse results:', lighthouseResult.lhr);
        await browser.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

runLighthouseWithPuppeteer();
