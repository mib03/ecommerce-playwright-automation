import { Page, Locator } from '@playwright/test';

export class OrderHistoryPage {

    page: Page;
    orderButton: Locator;
    tableRows: Locator;
    orderIdDetails: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderButton = page.locator("button[routerlink*='orders']");
        this.tableRows = page.locator("tbody tr");
        this.orderIdDetails = page.locator(".col-text");
    }

    async openOrders() {
        await this.orderButton.click();
        await this.page.locator("tbody").waitFor();
    }

    async openOrderDetails(orderId: any) {

        for (let i = 0; i < await this.tableRows.count(); i++) {
            const rowOrderId = await this.tableRows.nth(i).locator("th").textContent();

            if (orderId.includes(rowOrderId)) {
                await this.tableRows.nth(i).locator("button").first().click();
                break;
            }
        }
    }

    async getOrderIdText() {
        return await this.orderIdDetails.textContent();
    }
}

module.exports = { OrderHistoryPage };
