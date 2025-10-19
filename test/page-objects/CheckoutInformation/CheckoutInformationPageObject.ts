import BasePage from "../Base/BasePage";
import { CheckoutInformationPageSelectors } from "./CheckoutInformationPageSelectors";

export default class CheckoutInformationPage extends BasePage {
  /**
   * Fill in the checkout information form
   * @param info - object containing firstName, lastName, postalCode
   */
  async fillCheckoutInformation(info: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }): Promise<void> {
    await (
      await CheckoutInformationPageSelectors.firstName()
    ).setValue(info.firstName);
    await (
      await CheckoutInformationPageSelectors.lastName()
    ).setValue(info.lastName);
    await (
      await CheckoutInformationPageSelectors.postalCode()
    ).setValue(info.postalCode);
  }

  /** Click the Continue button */
  async clickOnContinue(): Promise<void> {
    await CheckoutInformationPageSelectors.continueBtn().click();
  }

  /** Optional: click Cancel button */
  async clickOnCancel(): Promise<void> {
    await CheckoutInformationPageSelectors.cancelBtn().click();
  }
}
