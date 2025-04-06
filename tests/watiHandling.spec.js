const { test, expect } = require("@playwright/test");

test("Web Handling Wait", async ({ page }) => {
  await page.goto("https://only-testing-blog.blogspot.com/");
  
  // Wait for network to be idle
  await page.waitForLoadState("networkidle");

  // Wait for #gparent_1 to be visible using a Locator
  await page.locator("#gparent_1").waitFor({ state: "visible" });

  // ✅ Correct: waitForSelector expects a string selector
  await page.waitForSelector("#gparent_1");

  // Small intentional timeout for demonstration
  await page.waitForTimeout(2000);

  // Wait using locator-specific timeout
  await page.locator("#gparent_1").waitFor({ timeout: 3000 });

  // Locate the submit button and wait for it to be visible
  const logo = page.locator("#Image1_img");
  await logo.waitFor({ state: "visible" });
});
