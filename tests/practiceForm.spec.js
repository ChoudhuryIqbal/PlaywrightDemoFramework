const { test, expect } = require("@playwright/test");
const { RegistrationPage } = require("../pageObjects/RegistrationPage");
const dataSet = JSON.parse(
  JSON.stringify(require("../testData/usersInfo.json"))
);

test("Practicing Basic Form Automation", async ({ page }) => {
  const regPage = new RegistrationPage(page);

  await regPage.goTo();

  await regPage.fillForm(
    dataSet.firstName,
    dataSet.lastName,
    dataSet.email,
    dataSet.gender,
    dataSet.mobile,
    dataSet.dob,
    dataSet.address,
    dataSet.state,
    dataSet.city
  );

  // Upload file
  await regPage.pictureUploadInput.setInputFiles("sample.txt");

  // Scroll to submit button and submit the form
  await regPage.submitBtn.scrollIntoViewIfNeeded();
  await regPage.submitForm();

  // Verify submission success
  await regPage.verifySubmission();

  // Wait to observe results
  await page.waitForTimeout(5000);
});
