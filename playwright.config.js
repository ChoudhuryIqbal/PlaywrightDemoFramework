// @ts-check
import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers:1,
  reporter: [
    ['html', { outputFolder: 'playwright-html-report', open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    trace: "on-first-retry",
    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        headless: false,
        screenshot:"only-on-failure",
        trace: "retain-on-failure",
        timeout: 40000,
        expect: {
          timeout: 20 * 1000,
        },
      },
    },
  ],
});
