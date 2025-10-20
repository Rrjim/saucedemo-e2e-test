import { expect } from "chai";
import BasePage from "../Base/BasePage";
import { CheckoutInformationPageSelectors } from "./CheckoutInformationPageSelectors";
import logger from "../../helper/logger";
import { CommonPageSelectors } from "../Common/CommonPageSelectors";

export default class CheckoutInformationPage extends BasePage {
  /**
   * Fill in the checkout information form and pass the actual values in world obj
   * @param info - object containing firstName, lastName, postalCode
   */
 async fillCheckoutInformation(
  info: { firstName: string; lastName: string; postalCode: string },
  world: { checkInfo?: { firstName: string; lastName: string; postalCode: string } }
): Promise<void> {
  await (await CheckoutInformationPageSelectors.firstName()).setValue(info.firstName);
  await (await CheckoutInformationPageSelectors.lastName()).setValue(info.lastName);
  await (await CheckoutInformationPageSelectors.postalCode()).setValue(info.postalCode);

  // store actual values passed by user in the world object
  const storedFirstName = await CheckoutInformationPageSelectors.firstName().getValue();
  const storedLastName = await CheckoutInformationPageSelectors.lastName().getValue();
  const storedPostalCode = await CheckoutInformationPageSelectors.postalCode().getValue();

  world.checkInfo = {
    firstName: storedFirstName,
    lastName: storedLastName,
    postalCode: storedPostalCode,
  };

  logger.info(`Checkout info stored in World object: ${JSON.stringify(world.checkInfo)}`);
}


  /** Click the Continue button */
  async clickOnContinue(): Promise<void> {
    await CheckoutInformationPageSelectors.continueBtn().click();
  }

  /** Optional: click Cancel button */
  async clickOnCancel(): Promise<void> {
    await CheckoutInformationPageSelectors.cancelBtn().click();
  }

  async verifyFormSentSuccessfully(): Promise<void> {
  const errorElement = await CheckoutInformationPageSelectors.errorMsg();
  const isErrorDisplayed = await errorElement.isDisplayed().catch(() => false);

  if (isErrorDisplayed) {
    const errorText = await errorElement.getText();
    logger.error(`Form submission failed with error: "${errorText}"`);
    expect.fail(
      `Expected form to be sent successfully, but got error: "${errorText}"`
    );
  }

  // expected
  const subHeader = await CommonPageSelectors.pageSubHeader();
  const subHeaderText = await subHeader.getText();

  expect(
    subHeaderText,
    "Subheader should indicate 'Checkout: Overview' after successful submission"
  ).to.include("Checkout: Overview");

  logger.info(`Form was sent successfully and Checkout Overview page is displayed.`);
}

async verifyCheckoutInfoNotEmpty(
  world: { checkInfo?: { firstName: string; lastName: string; postalCode: string } }
): Promise<void> {
  if (!world.checkInfo) {
    throw new Error("No checkout information found in World object to verify.");
  }

  const { firstName, lastName, postalCode } = world.checkInfo;

  // none of the fields are empty
  expect(firstName, "First name should not be empty").to.not.be.empty;
  expect(lastName, "Last name should not be empty").to.not.be.empty;
  expect(postalCode, "Postal code should not be empty").to.not.be.empty;

  logger.info(
    `Checkout info verification passed: firstName="${firstName}", lastName="${lastName}", postalCode="${postalCode}"`
  );
}


}
