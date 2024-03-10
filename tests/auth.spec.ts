import { chromium, test, expect } from '@playwright/test';

test.only('Open mail', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext()
  const page = await context.newPage();
  await page.goto("https://mail.ru/");

   // Click input[data-testid="username"
   await page.click('input[data-testid="username"]');

   // Fill input[name="email"]
   await page.fill('input[data-testid="username"]', '000');

   // Press Tab
   await page.press('input[data-testid="username"]', 'Tab');

   // Fill input[data-testid="password"]
   await page.fill('input[data-testid="password"]', '000');

   // Click button[data-testid="login"]
   await page.click('button[data-testid="login"]')
   await page.waitForTimeout(10000);
  
  
  
  
  
   await browser.close()
})