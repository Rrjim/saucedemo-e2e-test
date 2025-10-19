import { Then } from "@wdio/cucumber-framework";
import CustomWorld from "./world";
import { parseTwoColumnTable } from "../../../utils/data/dataTableOperations";
import logger from "../../helper/logger";

Then(
  /^the number of products displayed on the page is: (\d+)$/,
  async function (this: CustomWorld, numOfProducts: string) {
    const count = parseInt(numOfProducts);
    await this.inventoryPage.verifyItemCount(count);
  }
);

Then(
  /^validate all products have valid price$/,
  async function (this: CustomWorld) {
    await this.productsPage.verifyAllPricesAreValid();
  }
);

Then(
  /^the user verifies page subheader should be equal to "?([^"]+)"?$/,
  async function (this: CustomWorld, expectedSubHeader: string) {
    await this.commonPage.verifyPageSubheader(expectedSubHeader);
  }
);

Then(
  /^all items should be reset to "Add to cart" state$/,
  async function (this: CustomWorld) {
    await this.productsPage.removeAllItemsFromCart();
  }
);

Then(
  /^the cart logo indicator should be equal to (\d+)$/,
  async function (this: CustomWorld, expectedCount: number) {
    await this.commonPage.verifyCartItemCount(expectedCount);
  }
);

Then(
  /^all items in the cart should have a quantity of (\d+)$/,
  async function (this: CustomWorld, expectedQuantity: number) {
    await this.cartPage.verifyAllItemQuantitiesAre(expectedQuantity);
  }
);

Then(
  /^all items in the cart should match the ones added from products page$/,
  async function (this: CustomWorld) {
    await this.cartPage.verifyCartItemsMatchWorld(this);
    logger.info(`>> product page items and added to cart items are matching!`)
  }
);

Then(
  /^the payment and shipping information should be:$/,
  async function (this: CustomWorld, dataTable) {
    const expectedInfo = parseTwoColumnTable(dataTable);
    await this.checkoutOverviewPage.verifyPaymentAndShippingInfo(expectedInfo);
  }
);

Then(
  /^the item total and tax should match the cart$/,
  async function (this: CustomWorld) {
    await this.checkoutOverviewPage.verifyItemTotalAndTax(this);
  }
);

Then(
  /^the user verifies the checkout completion info:$/,
  async function (this: CustomWorld, dataTable) {
    const expectedInfo = parseTwoColumnTable(dataTable);
    await this.checkoutCompletePage.verifyCompletionInfo(expectedInfo);
  }
);

Then(
  /^the order completion image should be correct$/,
  async function (this: CustomWorld) {
    await this.checkoutCompletePage.verifyCompletionImageSource();
  }
);

Then(
  /^there should be (\d+) button(s)? with text "([^"]+)"$/,
  async function (
    this: CustomWorld,
    expectedCountStr: string,
    _s: string,
    expectedText: string
  ) {
    await this.inventoryPage.verifyButtonsCountWithText(
      expectedText,
      expectedCountStr
    );
  }
);

Then(/^the user logs out$/, async function (this: CustomWorld) {
  await this.commonPage.logout();
});

Then(
  /^the login error message should be correct for "([^"]+)"$/,
  async function (this: CustomWorld, username: string) {
    await this.loginPage.expectLoginErrorMessageForUser(username);
  }
);

Then(
  /^the product "([^"]*)" should display correct (description|price|image) with value "([^"]*)"$/,
  async function (
    this: CustomWorld,
    productName: string,
    field: string,
    expected: string
  ) {
    switch (field) {
      case "description":
        await this.productsPage.verifyProductField(
          productName,
          "description",
          false,
          expected
        );
        break;
      case "price":
        await this.productsPage.verifyProductField(
          productName,
          "price",
          false,
          expected
        );
        break;
      case "image":
        await this.productsPage.verifyProductField(
          productName,
          "imageElem",
          true,
          expected
        );
        break;
      default:
        throw new Error(`Unsupported field "${field}"`);
    }
  }
);

Then(
  /^products should be sorted by "([^"]+)"$/,
  async function (this: CustomWorld, sortType: string) {
    const sortKey = sortType.toLowerCase() as "az" | "za" | "lohi" | "hilo";
    await this.productsPage.verifySorting(sortKey);
  }
);
