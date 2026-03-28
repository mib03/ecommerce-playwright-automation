import { Page, Locator } from '@playwright/test';

export class DashboardPage {

    page: Page;
    products: Locator;
    cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.cartButton = page.locator("[routerlink*='cart']");
    }

    async addProductToCart(productName: string) {

        const product = this.products
            .filter({ hasText: productName });

        await product.locator("text=Add To Cart").click();
    }

    async navigateToCart() {
        await this.cartButton.click();
        await this.page.locator("div li").first().waitFor();
    }

    async isLoaded() {
        await this.products.first().waitFor();
    }
}

module.exports = { DashboardPage };
