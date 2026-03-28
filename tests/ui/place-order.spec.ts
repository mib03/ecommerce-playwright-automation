import { test, expect } from "@playwright/test";
import { POManager } from '../../pages/pom-manager';
import dataSet from '../../utils/placeorderTestData.json';

test.describe('Place Order', () => {

  for (const data of dataSet) {
    test(`should place order successfully for ${data.email}`, async ({ page }) => {

      const poManager: POManager = new POManager(page);

      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(data.email, data.password);
      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.isLoaded();
      
      await dashboardPage.addProductToCart(data.productName);
      await dashboardPage.navigateToCart();

      const cartPage = poManager.getCartPage();
      await expect(cartPage.getProductLocator(data.productName)).toBeVisible();

      await cartPage.checkout();

      const orderReviewPage = poManager.getOrderReviewPage();
      await orderReviewPage.selectCountry("ind", "Indonesia");

      await expect(orderReviewPage.getEmailLocator()).toHaveText(data.email);

      const orderId: string = (await orderReviewPage.submitOrder())!;

      await expect(orderReviewPage.getSuccessMessageLocator())
        .toHaveText(" Thankyou for the order. ");

      const orderHistoryPage = poManager.getOrderHistoryPage();
      await orderHistoryPage.openOrders();
      await orderHistoryPage.openOrderDetails(orderId);

      const orderIdDetails: string = (await orderHistoryPage.getOrderIdText())!;

      expect(orderId.includes(orderIdDetails)).toBeTruthy();
    });
  }
});