import { When, world } from '@wdio/cucumber-framework';
import { ENV } from '../../../config/env';
import { expect } from 'chai';
import BasePage from '../../page-objects/Base/BasePage';
import PageFactory from '../../../utils/factories/PageObjectFactory';
import InventoryPage from '../../page-objects/Inventory/InventoryPage';
import LoginPage from '../../page-objects/Login/LoginPage';
import CustomWorld from './world';
import ProductsPage from '../../page-objects/Products/ProductsPageObject';
import CartPage from '../../page-objects/Cart/CartPageObject';
import CheckoutInformationPage from '../../page-objects/CheckoutInformation/CheckoutInformationPageObject';
import parseSingleRowTable from '../../../utils/data/dataTableOperations'
import { parseSingleColumnTable } from '../../../utils/data/dataTableOperations';
import CheckoutOverviewPage from '../../page-objects/CheckoutOverview/CheckoutOverviewPageObject';
import CommonPage from '../../page-objects/Common/CommonPageObject';
import CheckoutCompletePage from '../../page-objects/CheckoutComplete/CheckoutCompletePageObject';

const pageFactory = new PageFactory();
const inventoryPage = pageFactory.get(InventoryPage);
const loginPage = pageFactory.get(LoginPage);
const productsPage = pageFactory.get(ProductsPage)
const cartPage = pageFactory.get(CartPage);
const basePage = pageFactory.get(BasePage);
const checkoutInfoPage = pageFactory.get(CheckoutInformationPage);
const checkoutOverviewPage = pageFactory.get(CheckoutOverviewPage);
const commonPage = pageFactory.get(CommonPage);
const checkoutCompletePage = pageFactory.get(CheckoutCompletePage)

When(/^the user is landed on the "([^"]+)" page$/, async (envKey: string) => {
    // Fetch URL dynamically from ENV
    const expectedURL = ENV[envKey as keyof typeof ENV];
    if (!expectedURL) throw new Error(`No URL defined for ENV key: ${envKey}`);

    basePage.verifyPageURL(expectedURL);
});


When(
  /^the user adds the following items to the cart:$/,
  async function (this: CustomWorld, dataTable) {
    const itemsToAdd = parseSingleColumnTable(dataTable, 'item name');
    await productsPage.addItemsToCart(itemsToAdd, this);
  }
);


When(/^the user clicks on the cart button$/,
  async() => {
    await commonPage.clickOnCartButton();
  }
);

When(/^the user clicks on the checkout button$/,
    async() => {
        await cartPage.clickOnCheckOut();
    }
)

When(/^the user fills in the checkout form with:$/, async (dataTable) => {
  // Parse table as Record<string, string>
  const row = parseSingleRowTable<Record<string, string>>(dataTable);

  // Map feature file headers to object keys expected by page
  const info = {
    firstName: row['first name'],
    lastName: row['last name'],
    postalCode: row['postal code'],
  };

  await checkoutInfoPage.fillCheckoutInformation(info);
});

When(/^the user clicks on the continue button$/, async () => {
    await checkoutInfoPage.clickOnContinue();
});

When(/^the user clicks on the finish button$/, async () => {
  await checkoutOverviewPage.clickOnFinish();
});

When(/^the user clicks on the back to products button$/, async () => {
  await checkoutCompletePage.clickOnBackToProducts();
});

When(/^the user clicks on the cancel button from the checkout overview page$/, async () => {
  await checkoutOverviewPage.clickOnCancel();
});

When('the user clicks on the {string} button', async (buttonText: string) => {
    await basePage.clickButtonByText(buttonText);
});


When(
  /^the user removes the following item from the cart:$/,
  async function (this: CustomWorld, dataTable) {
    const itemsToRemove = parseSingleColumnTable(dataTable, 'item name');
    await cartPage.removeItemsFromCart(itemsToRemove, this);
  }
);

When(/^the filter dropdown should display$/, async () => {
    await productsPage.verifyFilterDropdownDisplayed();
});