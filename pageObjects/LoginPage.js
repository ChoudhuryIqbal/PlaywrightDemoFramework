class LoginPage{
    constructor (page){
        this.firstNameTextBox()= page.locator("#firstName");
        this.lastNameTextBox()=page.locator ("[id='lastName']")
        this.emailTextBox=page.getByPlaceholder("name@example.com")
        this.maleRadioBtn=page.getByText("Male",{exact:true});
        this.mobileNoTextBox=page.getByPlaceholder('Mobile Number');
        this.dateOfBirthInput=page.locator("#dateOfBirthInput")
        this.subjectTextArea=page.locator('#subjectsInput')
        this.selectEnglishSubject=page.getByText("English",{exact:true})
        this.sportsChkBox=page.locator("[type='checkbox']").first()
        this.currentAddressTextArea= page.locator('#currentAddress')
        this.pictureUploadInput=page.locator('#uploadPicture')
        this.stateDropdown=page.locator('#state svg');
        this.stateHaryan=page.getByText('Haryana', { exact: true })
        this.cityDropdown=page.getByText('Select City')
        this.cityPanipatOption=page.getByText('Panipat', { exact: true })
        this.submitBtn= page.getByRole('button',{name:'submit'}) 
        this. modalTitle=expect(page.locator(".modal-title"))
    }
}