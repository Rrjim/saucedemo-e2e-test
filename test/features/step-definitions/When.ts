import { When, world } from "@wdio/cucumber-framework";
import { ENV } from "../../../config/env";
import CustomWorld from "./world";
import { parseSingleColumnTable } from "../../../utils/data/dataTableOperations";
import parseSingleRowTable from "../../../utils/data/dataTableOperations";
import logger from "../../helper/logger";

When(
  /^the user is landed on the "([^"]+)" page$/,
  async function (this: CustomWorld, envKey: string) {
    const expectedURL = ENV[envKey as keyof typeof ENV];
    if (!expectedURL) throw new Error(`No URL defined for ENV key: ${envKey}`);

    await this.basePage.verifyPageURL(expectedURL);
    logger.info(`>> landed on the ${envKey} page`)
  }
);

When(
  /^the user adds the following items to the cart:$/,
  async function (this: CustomWorld, dataTable) {
    const itemsToAdd = parseSingleColumnTable(dataTable, "item name");
    logger.info(`>> ${itemsToAdd} is added to the cart!`)
    await this.productsPage.addItemsToCart(itemsToAdd, this);
  }
);

When(
  /^the user clicks on the cart button$/,
  async function (this: CustomWorld) {
    await this.commonPage.clickOnCartButton();
  }
);

When(
  /^the user clicks on the checkout button$/,
  async function (this: CustomWorld) {
    await this.cartPage.clickOnCheckOut();
    logger.info(`>> the user just ordered ${world.cartItems.length} items`)
  }
);

When(
  /^the user fills in the checkout form with:$/,
  async function (this: CustomWorld, dataTable) {
    const row = parseSingleRowTable<Record<string, string>>(dataTable);
    const info = {
      firstName: row["first name"],
      lastName: row["last name"],
      postalCode: row["postal code"],
    };
    await this.checkoutInfoPage.fillCheckoutInformation(info, this); 
    logger.info(`the user just added their information ${info.firstName} ${info.lastName} ${info.postalCode}`);
    // console.log(">>FNAME " +this.checkInfo.firstName)
  }
);

When(
  /^the user clicks on the continue button$/,
  async function (this: CustomWorld) {
    await this.checkoutInfoPage.clickOnContinue();
  }
);

When(
  /^the user clicks on the finish button$/,
  async function (this: CustomWorld) {
    await this.checkoutOverviewPage.clickOnFinish();
  }
);

When(
  /^the user clicks on the back to products button$/,
  async function (this: CustomWorld) {
    await this.checkoutCompletePage.clickOnBackToProducts();
  }
);

When(
  /^the user clicks on the cancel button from the checkout overview page$/,
  async function (this: CustomWorld) {
    await this.checkoutOverviewPage.clickOnCancel();
  }
);

When(
  "the user clicks on the {string} button",
  async function (this: CustomWorld, buttonText: string) {
    await this.basePage.clickButtonByText(buttonText);
  }
);

When(
  /^the user removes the following item from the cart:$/,
  async function (this: CustomWorld, dataTable) {
    const itemsToRemove = parseSingleColumnTable(dataTable, "item name");
    await this.cartPage.removeItemsFromCart(itemsToRemove, this);
  }
);

When(
  /^the filter dropdown should display$/,
  async function (this: CustomWorld) {
    await this.productsPage.verifyFilterDropdownDisplayed();
  }
);

When(
  /^the user resets the application state$/,
  async function (this: CustomWorld) {
    await this.commonPage.resetAppState();
    logger.info(`>> App state was reset!`)
  }
);

When(
    /^the checkout information for should be sent succesffully$/,
    async function(this:CustomWorld) {
        await this.checkoutInfoPage.verifyFormSentSuccessfully();
    }
)