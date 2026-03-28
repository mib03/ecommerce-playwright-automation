import { LoginPage } from "./login-page";
import { DashboardPage } from "./dashboard-page";
import { CartPage } from "./cart-page";
import { OrderReviewPage } from "./order-review-page";
import { OrderHistoryPage } from "./order-history-page";
import { Page } from '@playwright/test';

export class POManager {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }

    getDashboardPage() {
        return new DashboardPage(this.page);
    }

    getCartPage() {
        return new CartPage(this.page);
    }

    getOrderReviewPage() {
        return new OrderReviewPage(this.page);
    }

    getOrderHistoryPage() {
        return new OrderHistoryPage(this.page);
    }
}

module.exports = { POManager }
