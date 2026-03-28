import { test, expect } from '@playwright/test';
import { POManager } from '../../pages/pom-manager';
import loginData from '../../utils/loginTestData.json';

test.describe('Login Feature', () => {
    test('user can login with valid credentials', async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(
            loginData.validUser.email,
            loginData.validUser.password
        );

        await expect(page).toHaveURL(/dashboard/);
    });


    test('user cannot login with invalid password', async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(
            loginData.invalidPassword.email,
            loginData.invalidPassword.password
        );

        await expect(page.getByText('Incorrect email or password')).toBeVisible();
    });


    test('user cannot login with invalid email', async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(
            loginData.invalidEmail.email,
            loginData.invalidEmail.password
        );

        await expect(page.getByText('Incorrect email or password')).toBeVisible();
    });


    test('user cannot login with empty email', async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(
            loginData.emptyEmail.email,
            loginData.emptyEmail.password
        );

        await expect(page.getByText('Email is required')).toBeVisible();
    });


    test('user cannot login with empty password', async ({ page }) => {
        const poManager = new POManager(page);
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(
            loginData.emptyPassword.email,
            loginData.emptyPassword.password
        );

        await expect(page.getByText('Password is required')).toBeVisible();
    });
});