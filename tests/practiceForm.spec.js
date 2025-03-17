import {test,expect} from "@playwright/test"

test("Pracicing Basic Form Automation",async ({browser})=>{
   // const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ viewport: { width: 1600, height: 1080 } });
    const page = await context.newPage();

    await page.goto('https://demoqa.com/automation-practice-form')
    const loginPage=new LoginPage(page);
    await page.locator("#firstName").fill("Choudhury")
    await page.locator ("[id='lastName']").fill("Iqbal")
    await page.getByPlaceholder("name@example.com").fill("iqman@gmail.com")
  //  await page.locator("[type='radio']").and(
  //  await page.locator('[value="Male"]').click()
    await page.getByText('Male', { exact: true }).click();
    await page.getByPlaceholder('Mobile Number').fill("9292929259")
  //  await page.locator("#dateOfBirthInput").fill('15 Mar 1992')
    await page.fill("#dateOfBirthInput",'15 Mar 1992')
    await page.mouse.click(10, 10);
    await page.locator('#subjectsInput').fill('E');
    await page.getByText('English', { exact: true }).click();
   // await page.mouse.click(100, 100);
  //  await page.locator("//*[@id='subjectsContainer']").click()
    // await page.locator("//*[@id='subjectsContainer']").focus()
   // await page.locator("//*[@id='subjectsContainer']"). type("Hello Text")
    await page.locator("[type='checkbox']").first().scrollIntoViewIfNeeded()
    await page.locator("[type='checkbox']").first().check({force:true})
    //await page.locator('#uploadPicture').click()
    await page.locator('#currentAddress').fill('680 Milton Ave ,New York')
    await page.locator('#uploadPicture').setInputFiles("sample.txt")
    await page.getByRole('button',{name:'submit'}).scrollIntoViewIfNeeded()
  
  await page.locator('#state svg').click();
  await page.getByText('Haryana', { exact: true }).click();
  await page.getByText('Select City').click();
  await page.getByText('Panipat', { exact: true }).click();
  await page.getByRole('button',{name:'submit'}).click()
   
  await expect(await page.locator(".modal-title")).toContainText("Thanks for submitting the form")
  await page.waitForTimeout(20000)
})