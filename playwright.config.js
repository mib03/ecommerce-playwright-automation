// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 2,
  timeout: 100 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [
    ["line"],
    [
      "allure-playwright",
      {
        resultsDir: "allure-results",
      },
    ],
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on'//off,on,retain-on-failure
  }

});

module.exports = config;
