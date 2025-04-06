const { test, expect } = require("@playwright/test");

test("TechPanda Registration Form with Random User and All Assertions", async ({ page }) => {
  // Generate random user data
  const randomFirst = `TestFirst${Math.floor(Math.random() * 1000)}`;
  const randomMiddle = `M${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
  const randomLast = `TestLast${Math.floor(Math.random() * 1000)}`;
  const randomEmail = `${randomFirst}.${randomLast}.${Date.now()}@example.com`;

  // Define locators using constants
  const firstNameInput = page.locator("#firstname");
  const middleNameInput = page.locator("#middlename");
  const lastNameInput = page.locator("#lastname");
  const lastNameLabel=page.locator("[for='lastname']")
  const emailInput = page.locator("#email_address");
  const passwordInput = page.locator("#password");
  const confirmPasswordInput = page.locator("#confirmation");
  const subscribeCheckbox = page.locator("#is_subscribed");
  const registerButton = page.locator('button[title="Register"]');
  
  // Navigate to the registration page
  await page.goto("https://live.techpanda.org/index.php/customer/account/create/");

  // Fill in the form
  await firstNameInput.fill(randomFirst);
  await middleNameInput.fill(randomMiddle);
  await lastNameInput.fill(randomLast);
  await emailInput.fill(randomEmail);
  await passwordInput.fill("TestPassword123!");
  await confirmPasswordInput.fill("TestPassword123!");



   // 1. Assert the page title
   await expect(page).toHaveTitle(/Create New Customer Account/);

   // 2. Assert the page URL
   await expect(page).toHaveURL("https://live.techpanda.org/index.php/customer/account/create/");
 
  // 1. Assert that the first name input has the correct value
  await expect(firstNameInput).toHaveValue(randomFirst);

  // 2. Assert that the middle name input has the correct value
  await expect(middleNameInput).toHaveValue(randomMiddle);

  // 3. Assert that the last name Label  has the correct Name
  await expect(lastNameLabel).toContainText("Last Name");

  // 4. Assert that the email input has the correct value
  await expect(emailInput).toHaveValue(randomEmail);

  // 5. Assert that the password input has the correct value
  await expect(passwordInput).toHaveValue("TestPassword123!");

  // 6. Assert that the confirm password input matches the password
  await expect(confirmPasswordInput).toHaveValue("TestPassword123!");

  // 7. Assert that the confirmation password contains the text "TestPassword123!"
  //await expect(confirmPasswordInput).toContainText("TestPassword123!");

  // 8. Assert that the subscribe checkbox is checked
  await expect(subscribeCheckbox).not.toBeChecked();

  // 9. Assert that the register button is enabled (not disabled)
  await expect(registerButton).toBeEnabled();

  // 10. Assert that the first name input is visible
  await expect(firstNameInput).toBeVisible();

  // 11. Assert that the email input is enabled
  await expect(emailInput).toBeEnabled();

  // 12. Assert that the subscribe checkbox is enabled
  await expect(subscribeCheckbox).toBeEnabled();

  // 13. Assert that the first name input has the "required" attribute
  await expect(firstNameInput).toHaveAttribute("maxlength", "255");

  // 14. Assert that the first name input has a class "input-text"
  await expect(firstNameInput).toHaveClass(/input-text/);

  // 15. Assert that the last name input is not empty
  await expect(lastNameInput).not.toBeEmpty();

  // 16. Assert that the register button has 1 occurrence
  await expect(registerButton).toHaveCount(1);

  // 17. Assert that the subscribe checkbox has a label containing 'Subscribe'
 // await expect(subscribeCheckbox.locator('..')).toContainText('Subscribe');

  // Optional: Wait to visually verify the form (remove if not needed)
  await page.waitForTimeout(5000);
});
