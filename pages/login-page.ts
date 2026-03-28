import { Page, Locator } from '@playwright/test';

export class LoginPage {

    page: Page;
    userName: Locator;
    password: Locator;
    signInButton: Locator;
    productTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.signInButton = page.locator("#login");
        this.productTitle = page.locator(".card-body b").first();
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(email: string, password: string) {
        await this.userName.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}

module.exports = { LoginPage }
