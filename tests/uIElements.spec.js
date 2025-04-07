const { test, expect } = require("@playwright/test");

test(" @smoke Read MultiTex from an application", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.locator("a.hrefch").first().waitFor(); //waiting for at least one element to load in the page
  const productName = await page.locator("a.hrefch").allTextContents();
  console.log(
    "Name printing after waiting for at least one element to be loaded",
    productName
  );
  //other way to print it

  await page
    .locator("a.hrefch")
    .allTextContents()
    .then((names) => {
      console.log("Collecting Name using Then()", names);
    });

  //If Matches with  'Sony vaio i5', then click
  const productLocators = await page.locator("a.hrefch");
  const count = await productLocators.count();

  for (let i = 0; i < count; i++) {
    const name = await productLocators.nth(i).textContent();
    if (name.trim() === "Sony vaio i5") {
      await productLocators.nth(i).click();
      break;
    }
  }
  await expect(await page.locator("h2.name")).toHaveText("Sony vaio i5");
});

test("Select Drop Down ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  // Open the dropdown by clicking on it
  await page.locator("#select-demo").selectOption({ label: "Tuesday" });
  // Verify the selected option value (using the value attribute)
  const selectedValue = await page.locator("#select-demo").inputValue();
  expect(selectedValue).toBe("Tuesday");
  await page.waitForTimeout(3000);

  await page.selectOption("#multi-select", [
    {
      label: "Texas",
    },
    {
      index: 2,
    },
    {
      value: "Washington",
    },
  ]);
  const selectedOptions = await page
    .locator("#multi-select option:checked")
    .allTextContents();
  console.log("Selected options:", selectedOptions);
  expect(selectedOptions).toContain("Texas");
  expect(selectedOptions).toContain("Washington");
});

test("Radion Buttons Test ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/radiobutton-demo"
  );
  const femaleRadioButton = await page.locator(
    "[name='optradio'][ value='Female']"
  );
  await femaleRadioButton.click();
  await expect(femaleRadioButton).toBeChecked();
});

test("Check Box Selection ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  const checkBox = await page.locator("#isAgeSelected");
  await checkBox.check();
  expect(checkBox).toBeChecked();
});

test("Test Window", async ({ page, context }) => {
  // Navigate to the target page
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // Locate and click the button to open the new window
  const openWindowButton = page.locator("#openwindow");

  // Listen for the new page (window/tab) opening
  const [newWindow] = await Promise.all([
    context.waitForEvent("page"), // Wait for the new page (tab/window)
    openWindowButton.click(), // Trigger the click to open the new window
  ]);

  // Perform actions on the new window (tab)
  await expect(newWindow).toHaveURL(/.*qaclickacademy.*/); // Check the URL of the new window
  await newWindow.waitForLoadState("networkidle");
  const newWindowText = await newWindow.title();

  console.log(newWindowText);
  await newWindow.close(); // Close the new window
  // Optionally, verify that you are back on the original page
  await expect(page).toHaveURL(
    "https://rahulshettyacademy.com/AutomationPractice/"
  );

});
