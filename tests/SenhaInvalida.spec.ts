import { test, expect } from "@playwright/test";

test('senha incorreta', async ({page}) => {

    await page.goto("https://saucedemo.com/");

    await page.fill('input[placeholder*=Username]', 'standard_user')
    await page.fill('input[placeholder*=Password]', '123')
    await page.fill('input[placeholder*=Password]', 'rique')
    await page.click('input#login-button.submit-button.btn_action')

    const modalMessage = page.locator('.error-message-container')
    await expect(modalMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
});
