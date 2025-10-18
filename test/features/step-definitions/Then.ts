import { Then } from '@wdio/cucumber-framework';
import PageFactory from '../../../utils/factories/PageObjectFactory';
import InventoryPage from '../../page-objects/Inventory/InventoryPage';
import LoginPage from '../../page-objects/Login/LoginPage';
import CustomWorld from './world';
import ProductsPage from '../../page-objects/Products/ProductsPageObject';
import CartPage from '../../page-objects/Cart/CartPageObject';

const pageFactory = new PageFactory();
const inventoryPage = pageFactory.get(InventoryPage);
const productsPage = pageFactory.get(ProductsPage);
const loginPage = pageFactory.get(LoginPage);
const cartPage = pageFactory.get(CartPage);





Then(/^the inventory page should contain (.*)$/, 
    async (numOfProducts: string) => {
        // Convert string to number
        const count = parseInt(numOfProducts);
        await inventoryPage.verifyItemCount(count);
    }
);

Then(/^validate all products have valid price$/, 
    async () => {
        await inventoryPage.verifyAllPricesAreValid();
        
    }
);

Then(/^the user verifies page subheader should be equal to "?([^"]+)"?$/, 
    async (expectedSubHeader: string) => {
        await inventoryPage.verifyPageSubheader(expectedSubHeader);
    }
)

Then(/^all items should be reset to "Add to cart" state$/, async() => {
    await inventoryPage.removeAllItemsFromCart();
});

Then(/^the cart should display (\d+) items$/,
    async function (expectedCount: number) {
        await inventoryPage.verifyCartItemCount(expectedCount);
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



