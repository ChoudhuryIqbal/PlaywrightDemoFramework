# Playwright Demo Framework
Creating a simple Playwright automation framework. Here , I will try to cover Playwright APIS. I will automate and create a Page Object Model Framework.

## Demo Sites List
1. https://rahulshettyacademy.com/client
2. https://github.com/cypress-io/cypress-realworld-app
3. https://www.saucedemo.com/checkout-step-one.html
4. https://demoqa.com/
5. https://rahulshettyacademy.com/seleniumPractise/#/cart
6. https://only-testing-blog.blogspot.com/

# To Run Allure Report Run following Command
`npx playwright test tests/practiceForm.spec.js --headed --reporter=line --reporter=allure-playwright`

# This Are some of the command thay may help Users
## To Run End To End Test
`npx playwright test`
## To Run test only on Desktop Chrome
`npx playwright test --project=chromium`
## To Run Debug mode
`npx playwright test --debug`
## To see Report after running 
`npx playwright show-report`
## To Open UI testRunner
`npx playwright test --ui`
