// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { config } from 'process';
export default defineConfig({
   testDir: './tests',
   timeout: 50000, //this is the timeout for running test case 
   expect: {
      timeout: 40000,   //this is timeout for assertions
   },

   reporter: 'html',
   projects: [

   {
      name : 'chrome',
      use: {
      browserName: 'chromium',
      headless : false,
      screenshot : 'on',
      trace : 'retain-on-failure' //it will trace only when test case is failed if we want to trace all passed and failed both then use trace : 'on'
   }
   },
     { name : 'safari',
   use: {
      browserName: 'webkit',
      headless : true,
      screenshot : 'on',
      trace : 'retain-on-failure' //it will trace only when test case is failed if we want to trace all passed and failed both then use trace : 'on'
   }
},
     {
        name: 'Google Chrome',
        use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
     },
     
      {
         name: 'webkit',
         use: { ...devices['Desktop Safari'] },
      }

      // {
      //    name: 'Microsoft Edge',
      //    use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
      // },
   ],
   

});
//module.exports = config //config is exported so that it can be access in overall project

