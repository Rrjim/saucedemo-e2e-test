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

const pageFactory = new PageFactory();
const inventoryPage = pageFactory.get(InventoryPage);
const loginPage = pageFactory.get(LoginPage);
const productsPage = pageFactory.get(ProductsPage)
const cartPage = pageFactory.get(CartPage);
const basePage = pageFactory.get(BasePage);
const checkoutInfoPage = pageFactory.get(CheckoutInformationPage);

When(/^the user is landed on the "([^"]+)" page$/, async (envKey: string) => {
    // Fetch URL dynamically from ENV
    const expectedURL = ENV[envKey as keyof typeof ENV];
    if (!expectedURL) throw new Error(`No URL defined for ENV key: ${envKey}`);

    basePage.verifyPageURL(expectedURL);
});


When(
  /^the user adds the following items to the cart:$/,
  async function (this: CustomWorld, dataTable) {
    const itemsToAdd = parseSingleColumnTable(dataTable, 'itemName');
    await productsPage.addItemsToCart(itemsToAdd, this);
  }
);


When(/^the user clicks on the cart button$/,
  async() => {
    await inventoryPage.clickOnCartButton();
  }
);

When(/^the user clicks on the checkout button$/,
    async() => {
        await cartPage.clickOnCheckOutButton();
    }
)

When(/^the user fills in the checkout form with:$/, async (dataTable) => {
  const info = parseSingleRowTable<{ firstName: string; lastName: string; postalCode: string }>(dataTable);
  await checkoutInfoPage.fillCheckoutInformation(info);
});

When(/^the user clicks on the continue button$/, async () => {
    await checkoutInfoPage.clickContinue();
});