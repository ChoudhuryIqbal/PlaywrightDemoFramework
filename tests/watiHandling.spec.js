const { test, expect } = require("@playwright/test");
test("Web Handling Wait", async ({ page }) => {
  await page.goto("https://only-testing-blog.blogspot.com/");
  await page.waitForLoadState("networkidle");
  await page.locator("#gparent_1").waitFor({ state: "visible" });
  //await page.locator('button#submit').waitForSelector();
  // await page.locator('#gparent_1').waitForElementState('enabled');
  await page.waitForSelector(await page.locator("#gparent_1"));
  await page.waitForTimeout(2000);
  await page.locator("#gparent_1").waitForTimeout(3000);
  // Locate the button element
  const button = page.locator("button#submit");
  // Wait for the button to be visible
  await button.waitFor({ state: "visible" });
});
