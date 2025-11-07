const { test, expect, request } = require('@playwright/test');

test.beforeAll( async () => {
   const apiContext =  await request.newContext();
   apiContext.post("")






})

//code for inserting token in local storage, we did this by javascript bcz in playwright there is no such function 
// await page.addInitScript(value => {
//     window.localStorage.setItem('token',value);
// }, token);

