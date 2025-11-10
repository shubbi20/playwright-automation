const { test, expect } = require('@playwright/test');

test('freshdesk crm code', async ({ page }) => {
await page.goto("https://acefone.freshdesk.com");
await page.getByRole('link', { name: 'Login' }).click();
await page.locator("#emailInput").fill("product.development@acefone.in");
await page.locator("#passwordInput").fill("Propass@809a");
await page.getByRole('button', { name: 'Login' }).click();
//await page.pause();
await page.locator("#username").fill("product.development@acefone.in");
await page.locator("#password").fill("Propass@809a");
await page.getByTestId('login-button').click();

 // ✅ Click the Smartflo App icon (left sidebar)
  await page.getByRole('img', { name: 'tata live ias' }).click();

  // ✅ Switch to iframe (use data-test-id OR iframe tag inside container)
  const smartfloFrame = page.frameLocator('[data-test-id="cti-widget-container"] iframe');

  // ✅ Perform login inside iframe
  await smartfloFrame.getByPlaceholder("Login ID").fill("Yaten750");
  await smartfloFrame.getByPlaceholder("Password").fill("Secure@113");

  await smartfloFrame.getByRole("button", { name: "LOGIN" }).click();

  // Optional wait to see result
  await page.waitForTimeout(3000);

//  // Select the Smartflo App (icon)
//   await page.getByRole('img', { name: 'tata live ias' }).click();

//   // ✅ Switch to iframe using its ID from screenshot
//   const frame = page.frameLocator('iframe#f11hgcyg');

//   // ✅ Perform actions inside iframe
//   await frame.getByPlaceholder('Login ID').fill('Yaten750');
//   await frame.getByPlaceholder('Password').fill('Secure@113');
//   await frame.getByRole('button', { name: 'LOGIN' }).click();













})