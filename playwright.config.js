// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { config } from 'process';
export default defineConfig({
   testDir: './tests',
   timeout: 50000, //this is the timeout for running test case 
   //retries : 1, //it retry test cases when test cases are failed, due to flakiness there is need of retries
   expect: {
      timeout: 40000,   //this is timeout for assertions
   },

   reporter: 'html',
   projects: [
      /* Test against desktop browsers */
      // {
      //    name: 'chromium',
      //    use: { ...devices['Desktop Chrome'] },
      // },
      // {
      //    name: 'firefox',
      //    use: { ...devices['Desktop Firefox'] },
      // },
      // {
      //    name: 'webkit',
      //    use: { ...devices['Desktop Safari'] },
      // },
      // /* Test against mobile viewports. */
      // {
      //    name: 'Mobile Chrome',
      //    use: { ...devices['Pixel 5'] },
      // },
      // {
      //    name: 'Mobile Safari',
      //    use: { ...devices['iPhone 12'] },
      // },
      /* Test against branded browsers. */
      {
         name: 'Google Chrome',
         use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
      },
      // {
      //    name: 'Microsoft Edge',
      //    use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
      // },
   ],
   use: {
      browserName: 'chromium',
      headless : false,
      screenshot : 'on',
      video : 'retain-on-failure',
      //viewport : {width : 720, height : 720},  //it is used to customize the size of browser opened 
      ignoreHTTPSErrors : true, //it is used to ignore ssl certificate error it automatically click on advanced button and open the website
      //permissions : ['geolocation'], //it is used when sometimes google wants your location and it automatically clicks on location
     // ...devices['Galaxy S8'], // here we can test in given device size 
      trace : 'retain-on-failure' //it will trace only when test case is failed if we want to trace all passed and failed both then use trace : 'on' and it print logs of test run
   },

});
//module.exports = config //config is exported so that it can be access in overall project

