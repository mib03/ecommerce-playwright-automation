import { Page, Locator } from '@playwright/test';

export class OrderReviewPage {

    page: Page;
    countryInput: Locator;
    dropdown: Locator;
    emailId: Locator;
    submitButton: Locator;
    successMessage: Locator;
    orderId: Locator;

    constructor(page: Page) {
        this.page = page;
        this.countryInput = page.getByPlaceholder('Select Country');
        this.dropdown = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submitButton = page.locator(".action__submit");
        this.successMessage = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async selectCountry(code: string, countryName: string) {

        await this.countryInput.pressSequentially(code, { delay: 150 });
        await this.dropdown.waitFor();

        const options = this.dropdown.locator("button");

        for (let i = 0; i < await options.count(); i++) {
            let text: any;
            text = await options.nth(i).textContent();
            if (text.trim() === countryName) {
                await options.nth(i).click();
                break;
            }
        }
    }

    getEmailLocator() {
        return this.emailId;
    }

    getSuccessMessageLocator() {
        return this.successMessage;
    }

    async submitOrder() {
        await this.submitButton.click();
        return await this.orderId.textContent();
    }
}

module.exports = { OrderReviewPage };
