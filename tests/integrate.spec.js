const { test, expect } = require('@playwright/test');
//const {LoginPage} = require('../pageobjects/LoginPage');
//const {expect} = require('../playwright.config');
const {POManager} = require('../pageobjects/POManager');
//JSON - >  stringify - > javascript object
const dataset = JSON.parse(JSON.stringify(require('../utils/LoginPageTestData.json')))

//const username= "client02"
//const userpassword = "Secure@61"
const agentName = "Yat750"
const fresdeskDomain = "https://acefone.freshdek.com"
const freshdeskApiKey = "jxS5GMFlpHdDNTYkLy"
const disableLocator ="div[id='enabled_users_list_chosen'] a[class='chosen-single chosen-default']"


test('freshdesk client integrate agent', async ({ page }) => {

  const pOManager = new POManager(page);
  const loginPage  = pOManager.getLoginPage();
 // const context = await browser.newContext();
  //const page = await context.newPage();
  await loginPage.goTO();
 // console.log(await page.title());
  //await expect(page).toHaveTitle("Login");
  await loginPage.validLogin(dataset.username, dataset.userpassword );
  await page.locator("//ul[@class='nav nav-pills mt-3']//child::li[5]//child::a").click();
  await page.locator("div[id='crm_hpbx2'] a[title='Click for More Details']").click();
  await page.locator("//button[@id='enable1']").click();
 // await page.locator("div[id='user_id_chosen'] a[class='chosen-single chosen-default']").fill("Yat750");
  //await page.locator("//li[@class='active-result result-selected']").click();
  
// await page.locator("//div[@id='user_id_chosen']//span[contains(text(),'Select an Option')]").click().fill("Yat750");
// Step 1: Click the dropdown to open it
await page.locator("//div[@id='user_id_chosen']//a").click();

// Step 2: Type in the search box inside the dropdown
await page.locator("//div[@id='user_id_chosen']//input").fill(agentName);

// await page.waitForTimeout(1000); // wait 1 second for dropdown results

// Step 4: Check if the agent exists in the dropdown list
const options = page.locator(`//div[@id='user_id_chosen']//li[contains(text(),"${agentName}")]`);
const count = await options.count();

if (count > 0) {
  console.log(`Agent "${agentName}" found in dropdown. Selecting it...`);
  await options.first().click();
} else {
  console.log(`Agent "${agentName}" not found in dropdown. It might already be integrated.`);
  return; // Exit test early
}

// // Step 3: Select the desired option
// await page.locator("//div[@id='user_id_chosen']//li[contains(text(),'Yat750')]").click();
// await page.locator("//span[normalize-space()='Mobile']").click();


const fdkDomainLocator= await page.locator("//input[@id='domain']")

await fdkDomainLocator.click();
await fdkDomainLocator.fill(fresdeskDomain);

await page.locator("#apitoken").click();
await page.locator("#apitoken").fill(freshdeskApiKey);

await page.locator("#savebtn").click();


await page.locator("#disable1").click();
 //await page.getByLabel("Select User to Disable Integration*").click();
await page.locator("//div[@id='enabled_users_list_chosen']").click();
await page.locator("//div[@id='enabled_users_list_chosen']//input").fill(agentName);
await page.getByText("Yat750 (vatss90@gmail.com)").click();

// await page.locator(disableLocator).click();
// await disableLocator.fill(agentName);


// const optionss = page.locator(`div[id='enabled_users_list_chosen'] a[class='chosen-single chosen-default']']//li[contains(text(),"${agentName}")]`);
// const countt = await options.count();


// if (countt > 0) {
//   console.log(`Agent "${agentName}" found in dropdown`);
//   await optionss.first().click();
//   await page.locator("#disablebtn").click();
// } else {
//   console.log(`Agent "${agentName}" not found in dropdown. Agent is not integrated`);
//   return; // Exit test early
// }

})














