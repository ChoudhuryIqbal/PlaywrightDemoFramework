const { expect } = require('@playwright/test'); 
class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.firstNameTextBox = page.locator("#firstName");
        this.lastNameTextBox = page.locator("[id='lastName']");
        this.emailTextBox = page.getByPlaceholder("name@example.com");
        this.maleRadioBtn = page.getByText("Male", { exact: true });
        this.mobileNoTextBox = page.getByPlaceholder("Mobile Number");
        this.dateOfBirthInput = page.locator("#dateOfBirthInput");
        this.subjectTextArea = page.locator("#subjectsInput");
        this.selectEnglishSubject = page.getByText("English", { exact: true });
        this.sportsChkBox = page.locator("[type='checkbox']").first();
        this.currentAddressTextArea = page.locator("#currentAddress");
        this.pictureUploadInput = page.locator("#uploadPicture");
        this.stateDropdown = page.locator("#state svg");
        this.stateHaryan = page.getByText("Haryana", { exact: true });
        this.cityDropdown = page.getByText("Select City");
        this.cityPanipatOption = page.getByText("Panipat", { exact: true });
        this.submitBtn = page.getByRole("button", { name: "submit" });
        this.modalTitle = page.locator(".modal-title"); // Fixed expect() issue
    }

    async goTo() {
        await this.page.goto("https://demoqa.com/automation-practice-form");
    }

    async fillForm({ firstName, lastName, email, gender, mobile, dob, address, state, city }) {
        await this.firstNameTextBox.fill(firstName);
        await this.lastNameTextBox.fill(lastName);
        await this.emailTextBox.fill(email);
        await this.page.getByText(gender, { exact: true }).click();
        await this.mobileNoTextBox.fill(mobile);
        await this.dateOfBirthInput.fill(dob);
        await this.currentAddressTextArea.fill(address);
        await this.stateDropdown.click();
        await this.page.getByText(state, { exact: true }).click();
        await this.cityDropdown.click();
        await this.page.getByText(city, { exact: true }).click();
    }

    async submitForm() {
        await this.submitBtn.click();
    }

    async verifySubmission() {
        await expect(this.modalTitle).toContainText("Thanks for submitting the form");
    }
}

module.exports = { RegistrationPage };
