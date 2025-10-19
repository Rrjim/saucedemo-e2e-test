import { expect } from 'chai';
import { CheckoutCompletePageSelectors } from './CheckoutCompletePageSelectors';
import BasePage from '../Base/BasePage';

export default class CheckoutCompletePage extends BasePage{
  /**
   * Verifies the completion texts using a key-value table
   */
  async verifyCompletionInfo(expectedInfo: Record<string, string>): Promise<void> {

    const actualHeader = await CheckoutCompletePageSelectors.completeHeader().getText();
    const actualDescription = await CheckoutCompletePageSelectors.completeDescription().getText();

    if (expectedInfo.completeHeader) {
      expect(
        actualHeader,
        `Expected header to be "${expectedInfo.completeHeader}" but got "${actualHeader}"`
      ).to.equal(expectedInfo.completeHeader);
    }

    if (expectedInfo.completeDescription) {
      expect(
        actualDescription,
        `Expected description to be "${expectedInfo.completeDescription}" but got "${actualDescription}"`
      ).to.equal(expectedInfo.completeDescription);
    }
  }

    async verifyCompletionImageSource(): Promise<void> {
        const imageElem = await CheckoutCompletePageSelectors.completeImg();
        await imageElem.waitForExist({ timeout: 5000 });

        const actualSrc = await imageElem.getAttribute('src');
        const expectedFragment = process.env.ORDER_COMPLETE_IMG_SRC;

        if (!expectedFragment) {
            throw new Error('Environment variable ORDER_COMPLETE_IMG_SRC is not defined.');
        }

        expect(
            actualSrc,
            `Expected image src "${actualSrc}" to include "${expectedFragment}"`
        ).to.include(expectedFragment);
    }

    /** Click the Finish button */
    async clickOnBackToProducts(): Promise<void> {
        await CheckoutCompletePageSelectors.backToProductsBtn().click();
    }
}
