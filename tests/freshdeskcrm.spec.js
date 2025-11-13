const { test, expect } = require('@playwright/test');

test('freshdesk crm code', async ({ page }) => {
await page.goto("https://acefone.freshdesk.com");
await page.getByRole('link', { name: 'Login' }).click();
await page.locator("#emailInput").fill("product.development@acefone.in");
await page.locator("#passwordInput").fill("Propass@809a");
await page.getByRole('button', { name: 'Login' }).click();
// await page.waitForTimeout(60000);
// await page.pause();
// return;
await page.locator("#username").fill("product.development@acefone.in");
await page.locator("#password").fill("Propass@809a");
await page.getByTestId('login-button').click();

await page.locator('button[data-test-id="nav-cti-widget-toggle"]').click();

  // ✅ Step 1: Locate Outer iframe (CTI widget container)
  const outerFrame = page.frameLocator('[data-test-id="cti-widget-container"] iframe');

  // ✅ Step 2: Locate Inner iframe (id="root") inside outer iframe
  const innerFrame = outerFrame.frameLocator('#root');

  // ✅ Step 3: Interact with elements inside inner iframe
  await innerFrame.locator('//input[@class="input-field-text"] [@type="text"]').fill("Yaten750");
  await innerFrame.locator('//input[@class="input-field-text"] [@type="password"]').fill("Secure@114");

  await innerFrame.getByRole('button', { name: 'LOGIN' }).click();

  await innerFrame.getByText('Entities').click();

  // Type a number into the search field inside the iframe
  await innerFrame.locator('input[placeholder="Search Contacts by number"]').fill('7505355983');


//await page.waitForLoadState('networkidle');
 //  Wait for the search results to appear
  //await innerFrame.locator('.contact-card-outer').first().waitFor({ state: 'visible' });
 await innerFrame.locator('.contact-card-outer', { hasText: '7505355983' }).waitFor({ state: 'visible', timeout: 15000 }); 

  //  Click the call icon for the first contact result
 // await innerFrame.locator('.contact-call-outer svg.call-history-icons').click();
await innerFrame.locator('.contact-card-outer', { hasText: '7505355983' }).locator('.contact-call-outer svg.call-history-icons').first().click();

await innerFrame.locator('//div[@class="call-btns-div"]//child::button[@type="button"]').waitFor({ state: 'visible', timeout: 15000 }); 
// Wait for 3 seconds (3000 milliseconds)
//await page.waitForTimeout(90000);

await innerFrame.locator('//div[@class="call-btns-div"]//child::button[@type="button"]').click();

  //await innerFrame.locator('button.call-button.active-answer.btn.btn-primary').click();
  await page.pause();

  // // ✅ Click CTI widget icon to open iframe (your toggle button)
  // await page.locator('button[data-test-id="nav-cti-widget-toggle"]').click();

 

  
 














})