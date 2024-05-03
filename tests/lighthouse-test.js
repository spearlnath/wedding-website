import puppeteer from 'puppeteer-core';
import { launch } from 'lighthouse';

async function runLighthouseWithPuppeteer() {
    try {
        const browser = await puppeteer.launch({ 
            executablePath: process.env.CHROME_PATH, // Use environment variable for Chrome executable path
            headless: true // Launch Chrome in headless mode
        });

        const url = 'http://localhost:5500/Wedding%20Website%20Trial%202/';
        const { port } = await browser.wsEndpoint();
        
        const lighthouseResult = await lighthouse(url, { port });

        console.log('Lighthouse results:', lighthouseResult.lhr);
        await browser.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

runLighthouseWithPuppeteer();