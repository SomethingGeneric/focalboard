#!/usr/bin/env node
/**
 * Sanity check screenshot script
 * Registers a test account and takes a screenshot of the dashboard
 * Usage: BASE_URL=http://localhost:8000 node take-screenshot.js <output-path>
 */

const playwright = require('playwright');

const outputPath = process.argv[2] || 'sanity-screenshot.png';
const baseUrl = process.env.BASE_URL || 'http://localhost:8000';

// Generate unique test credentials
const timestamp = Date.now();
const testEmail = `test${timestamp}@example.com`;
const testUsername = `testuser${timestamp}`;
const testPassword = 'TestPassword123!';

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log(`Navigating to ${baseUrl}...`);
    
    // Navigate to the application
    await page.goto(baseUrl, { waitUntil: 'networkidle', timeout: 30000 });
    
    console.log('Waiting for login page to load...');
    await page.waitForSelector('input[type="password"]', { timeout: 10000 });
    
    // Click on "create an account" link to go to registration page
    console.log('Navigating to registration page...');
    const registerLink = page.locator('text=/create an account/i');
    const registerLinkExists = await registerLink.count() > 0;
    
    if (registerLinkExists) {
      await registerLink.click();
      await page.waitForURL('**/register', { timeout: 10000 });
      console.log('On registration page');
      
      // Fill in registration form
      console.log(`Registering test account: ${testUsername}`);
      await page.fill('#login-email', testEmail);
      await page.fill('#login-username', testUsername);
      await page.fill('#login-password', testPassword);
      
      // Submit registration form
      console.log('Submitting registration...');
      await page.click('button:has-text("Register")');
      
      // Wait for redirect to dashboard
      console.log('Waiting for dashboard to load...');
      await page.waitForURL(baseUrl + '/', { timeout: 10000 });
      
      // Wait for board creation page or dashboard content to be visible
      // Look for either "Create a board" heading or template list
      await page.waitForSelector('text=/Create a board|Add board/i', { timeout: 10000 });
      
      console.log('Dashboard loaded successfully');
    } else {
      console.log('No registration link found, taking screenshot of login page');
    }
    
    // Wait for templates to be fully loaded
    // The template selector shows when all templates have been fetched and rendered
    await page.waitForSelector('text=/Meeting Agenda|Personal Tasks/i', { timeout: 5000 }).catch((error) => {
      console.warn('WARNING: Templates not found or failed to load within timeout, proceeding anyway.', error);
    });
    
    console.log(`Taking screenshot: ${outputPath}`);
    
    // Take a screenshot
    await page.screenshot({ path: outputPath, fullPage: true });
    
    console.log('Screenshot taken successfully!');
    console.log(`Test account registered: ${testUsername}`);
  } catch (error) {
    console.error('Error taking screenshot:', error);
    // Take an error screenshot for debugging
    try {
      await page.screenshot({ path: outputPath.replace('.png', '-error.png'), fullPage: true });
    } catch (screenshotError) {
      console.error('Failed to take error screenshot:', screenshotError);
    }
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
