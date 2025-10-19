import { expect } from "chai";
import { ENV } from "../../../config/env";
export default class BasePage {
  /** Open a URL path relative to base or full URL */
  async open(path: string) {
    await browser.url(path);
  }

  /** Wait until the current URL matches expected URL (from ENV or literal) */
  async verifyPageURL(expectedURLOrKey: string) {
    const expectedURL =
      ENV[expectedURLOrKey as keyof typeof ENV] || expectedURLOrKey;

    await browser.waitUntil(
      async () => (await browser.getUrl()) === expectedURL,
      {
        timeout: 5000,
        timeoutMsg: `Expected page URL to be ${expectedURL}`,
      }
    );

    const actualURL = await browser.getUrl();
    expect(actualURL).to.equal(expectedURL);
  }

  /**
   * Clicks a button element by its visible text
   * @param text - text visible on the button
   */
  async clickButtonByText(text: string) {
    const button = await $(`//button[normalize-space(text())="${text}"]`);
    await button.waitForDisplayed();
    await button.click();
  }
}
