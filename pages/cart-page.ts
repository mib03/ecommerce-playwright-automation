import { Page, Locator } from '@playwright/test';

export class CartPage {

    page: Page;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator("text=Checkout");
    }

    getProductLocator(productName: string) {
        return this.page.locator(`h3:has-text("${productName}")`);
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };
