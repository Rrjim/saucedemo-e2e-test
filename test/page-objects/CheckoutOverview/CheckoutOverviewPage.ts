import { expect } from "chai";
import { CheckoutOverviewPageSelectors } from "./CheckoutOverviewPageSelectors";
import CartPage from "../Cart/CartPage";
import { extractNumericPart } from "../../../utils/data/stringOperations";
import CustomWorld from "../../features/step-definitions/world";

export default class CheckoutOverviewPage extends CartPage {
  /**
   * Verifies that payment and shipping info match expected values.
   * @param expectedInfo A record with keys like "paymentInfo" and "shippingInfo"
   */
  async verifyPaymentAndShippingInfo(
    expectedInfo: Record<string, string>
  ): Promise<void> {
    const paymentElem = await CheckoutOverviewPageSelectors.paymentInfo();
    const shippingElem = await CheckoutOverviewPageSelectors.shippingInfo();

    const actualPayment = await paymentElem.getText();
    const actualShipping = await shippingElem.getText();

    expect(actualPayment, "Payment info mismatch").to.equal(
      expectedInfo.paymentInfo
    );
    expect(actualShipping, "Shipping info mismatch").to.equal(
      expectedInfo.shippingInfo
    );
  }

  /**
   * Verifies that item total and total after tax match expectations
   */
  async verifyItemTotalAndTax(world: CustomWorld): Promise<void> {
    const itemTotalElem = CheckoutOverviewPageSelectors.itemTotal();
    const taxElem = CheckoutOverviewPageSelectors.tax();
    const totalElem = CheckoutOverviewPageSelectors.tatalAfterTax();

    const actualItemTotalText = await itemTotalElem.getText();
    const actualTaxText = await taxElem.getText();
    const actualTotalText = await totalElem.getText();

    const actualItemTotal = extractNumericPart(actualItemTotalText);
    const actualTax = extractNumericPart(actualTaxText);
    const actualTotal = extractNumericPart(actualTotalText);

    const expectedItemTotal = world.getCartTotal();
    // convert string to numeric using + and keep only two decimal
    const expectedTotalAfterTax = +(expectedItemTotal + actualTax).toFixed(2);

    expect(actualItemTotal, "Item total mismatch").to.equal(expectedItemTotal);
    expect(actualTotal, "Total after tax mismatch").to.equal(
      expectedTotalAfterTax
    );

    await console.log(`act total is: ${actualTotal}`);
    await console.log(`exp total is: ${expectedTotalAfterTax}`);
  }

  /** Click the Finish button */
  async clickOnFinish(): Promise<void> {
    await CheckoutOverviewPageSelectors.finishBtn().click();
  }

  /** Click the Cancel button */
  async clickOnCancel(): Promise<void> {
    await CheckoutOverviewPageSelectors.cancelBtn().click();
  }
}
