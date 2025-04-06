const { test, expect } = require("@playwright/test");

test("Shopping Cart Application", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  await page.getByPlaceholder("Search for Vegetables and Fruits").fill("ca");
  await page.waitForTimeout(1000);

  await page.getByText("ADD TO CART").nth(0).click();
  await page.getByText("ADD TO CART").nth(1).click();

  await page.locator(".cart-icon").click();

  await page.getByRole("button", { name: "PROCEED TO CHECKOUT" }).click();

  await page.locator(".promoCode").fill("rahulshettyacademy");
  await page.getByRole("button", { name: "Apply" }).click();
  await page.waitForTimeout(1000); // wait for filtered results

  await expect(page.locator(".promoInfo")).toHaveText("Code applied ..!");

  await page.getByRole("button", { name: "Place Order" }).click();

  await page.locator("select").selectOption("India");
  await page.locator('input[type="checkbox"]').check();

  await page.getByRole("button", { name: "Proceed" }).click();

});
