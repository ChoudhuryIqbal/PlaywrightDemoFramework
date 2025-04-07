const { test, expect } = require("@playwright/test");

test("Web Handling Wait", async ({ page }) => {
  await page.goto("https://only-testing-blog.blogspot.com/");
  
  await page.waitForLoadState("networkidle");

  await page.locator("#gparent_1").waitFor({ state: "visible" });

  await page.waitForSelector("#gparent_1");

  await page.waitForTimeout(2000);

  await page.locator("#gparent_1").waitFor({ timeout: 3000 });

  const logo = page.locator("#Image1_img");
  await logo.waitFor({ state: "visible" });
});
