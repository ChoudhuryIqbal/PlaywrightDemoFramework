const { test, expect } = require("@playwright/test");

test("Pop Up Validations ", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  //check Hidden
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();

  //alert pop up
  page.once("dialog", async (dialog) => {
    console.log(" Alert Text " + dialog.message());
    expect(dialog.message()).toContain("Hello");
    await dialog.accept();
  });
  const alertBtn = page.locator("#confirmbtn").click();

  //hover
  await page.locator("#mousehover").scrollIntoViewIfNeeded();
  await page.locator("#mousehover").hover();
  await page.waitForTimeout(1000);

  //handle Frame
  const frameLocator = page.frameLocator("[name='iframe-name']");
  await frameLocator.locator("body").scrollIntoViewIfNeeded();
  const menuItems = frameLocator.locator(
    ".main-menu>div.navbar-collapse>ul>li"
  );
  const count = await menuItems.count();
  expect(count).toBe(18);
});
