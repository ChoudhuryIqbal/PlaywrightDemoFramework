const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pageObjects/RegistrationPage');

test("Practicing Basic Form Automation", async ({ page }) => {
    const regPage = new RegistrationPage(page);
    
    await regPage.goTo(); 

    await regPage.fillForm({
        firstName: "Choudhury",
        lastName: "Iqbal",
        email: "iqman@gmail.com",
        gender: "Male",
        mobile: "9292929259",
        dob: "15 Mar 1992",
        address: "680 Milton Ave, New York",
        state: "Haryana",
        city: "Panipat"
    });

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
