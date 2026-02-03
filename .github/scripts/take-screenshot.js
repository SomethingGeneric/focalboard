#!/usr/bin/env node
/**
 * Sanity check screenshot script
 * Takes a screenshot of the Bingusboard application running on localhost:8000
 * Usage: node take-screenshot.js <output-path>
 */

const playwright = require('playwright');

const outputPath = process.argv[2] || 'sanity-screenshot.png';
const baseUrl = process.env.BASE_URL || 'http://localhost:8000';

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log(`Navigating to ${baseUrl}...`);
    
    // Navigate to the application
    await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30000 });
    
    console.log('Waiting for login form to be visible...');
    
    // Wait for the login form to be visible (indicates page is fully loaded)
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    
    console.log(`Taking screenshot: ${outputPath}`);
    
    // Take a screenshot
    await page.screenshot({ path: outputPath, fullPage: true });
    
    console.log('Screenshot taken successfully!');
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
