import { Then } from '@wdio/cucumber-framework';
import PageFactory from '../../../utils/factories/PageObjectFactory';
import InventoryPage from '../../page-objects/Inventory/InventoryPage';
import LoginPage from '../../page-objects/Login/LoginPage';
import CustomWorld from './world';
import ProductsPage from '../../page-objects/Products/ProductsPageObject';
import CartPage from '../../page-objects/Cart/CartPageObject';
import { parseTwoColumnTable } from '../../../utils/data/dataTableOperations';
import CheckoutOverviewPage from '../../page-objects/CheckoutOverview/CheckoutOverviewPageObject';
import CommonPage from '../../page-objects/Common/CommonPageObject';
import CheckoutCompletePage from '../../page-objects/CheckoutComplete/CheckoutCompletePageObject';

const pageFactory = new PageFactory();
const inventoryPage = pageFactory.get(InventoryPage);
const productsPage = pageFactory.get(ProductsPage);
const loginPage = pageFactory.get(LoginPage);
const checkoutOverviewPage = pageFactory.get(CheckoutOverviewPage);
const cartPage = pageFactory.get(CartPage);
const commonPage = pageFactory.get(CommonPage);
const checkoutCompletePage = pageFactory.get(CheckoutCompletePage);




Then(/^the number of products displayed on the page is: (\d+)$/, 
    async (numOfProducts: string) => {
        // Convert string to number
        const count = parseInt(numOfProducts);
        await inventoryPage.verifyItemCount(count);
    }
);

Then(/^validate all products have valid price$/, 
    async () => {
        await productsPage.verifyAllPricesAreValid();
        
    }
);

Then(/^the user verifies page subheader should be equal to "?([^"]+)"?$/, 
    async (expectedSubHeader: string) => {
        await commonPage.verifyPageSubheader(expectedSubHeader);
    }
)

Then(/^all items should be reset to "Add to cart" state$/, async() => {
    await productsPage.removeAllItemsFromCart();
});

Then(/^the cart logo indicator should be equal to (\d+)$/,
    async function (expectedCount: number) {
        await commonPage.verifyCartItemCount(expectedCount);
    }
);


Then(/^all items in the cart should have a quantity of (\d+)$/,
    async (expectedQuantity: number) => {
        await cartPage.verifyAllItemQuantitiesAre(expectedQuantity);
    }
);


Then(/^all items in the cart should match the ones added from products page$/,
    async function(this:CustomWorld) {
        // Assuming world.cartItems contains the items you added previously
        await cartPage.verifyCartItemsMatchWorld(this);
    }
);

Then(/^the payment and shipping information should be:$/, async(dataTable) => {
  const expectedInfo = parseTwoColumnTable(dataTable);
  await checkoutOverviewPage.verifyPaymentAndShippingInfo(expectedInfo);
});


Then(/^the item total and tax should match the cart$/, async function (this: CustomWorld) {
  await checkoutOverviewPage.verifyItemTotalAndTax(this);
});

Then(/^the user verifies the checkout completion info:$/, async function (dataTable) {
  const expectedInfo = parseTwoColumnTable(dataTable);
  await checkoutCompletePage.verifyCompletionInfo(expectedInfo);
});

Then(/^the order completion image should be correct$/, async () => {
  await checkoutCompletePage.verifyCompletionImageSource();
});

Then(
  /^there should be (\d+) button(s)? with text "([^"]+)"$/,
  async (expectedCountStr: string, _s: string, expectedText: string) => {
      await inventoryPage.verifyButtonsCountWithText(expectedText, expectedCountStr);
  }
);


Then(/^the user logs out$/, async () => {
    await commonPage.logout();
});

Then(/^the login error message should be correct for "([^"]+)"$/, 
  async function (username: string) {
    await loginPage.expectLoginErrorMessageForUser(username);
});

Then(
  /^the product "([^"]*)" should display correct (description|price|image) with value "([^"]*)"$/,
  async (productName: string, field: string, expected: string) => {
    switch (field) {
      case "description":
        await productsPage.verifyProductField(productName, "description", false, expected);
        break;
      case "price":
        await productsPage.verifyProductField(productName, "price", false, expected);
        break;
      case "image":
        await productsPage.verifyProductField(productName, "imageElem", true, expected);
        break;
      default:
        throw new Error(`Unsupported field "${field}"`);
    }
  }
);


Then(/^products should be sorted by "([^"]+)"$/, async (sortType: string) => {
    const sortKey = sortType.toLowerCase() as 'az' | 'za' | 'lohi' | 'hilo';
    await productsPage.verifySorting(sortKey);
});