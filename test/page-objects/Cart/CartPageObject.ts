import { expect } from 'chai';
import CustomWorld from '../../features/step-definitions/world';
import InventoryPage from '../Inventory/InventoryPage';
import { InventoryPageSelectors } from '../Inventory/InventoryPageSelectorstors';
import { InventoryItem } from '../Inventory/InventoryItem';
import { CartPageSelectors } from './CartPageSelectors';
import { extractNumericPart } from '../../../utils/data/stringOperations';

export default class CartPage extends InventoryPage {

    /**
     * Get the quantity of a specific item element.
     * @param item - WebdriverIO.Element representing the item container
     * @returns number quantity
     */
    async getItemQuantity(item: InventoryItem): Promise<number> {
        if (!item.quantity) throw new Error(`Quantity element missing for item "${item.name}"`);

        // unwrap the ChainablePromiseElement
        const quantityElem = await item.quantity;
        const text = await quantityElem.getText();
        const quantity = parseInt(text, 10);

        if (isNaN(quantity)) {
            throw new Error(`Quantity text "${text}" is not a number`);
        }

        return quantity;
    }

    async verifyAllItemQuantitiesAre(expectedQuantity: number): Promise<void> {
        const items = await this.getAllItems();

        for (const item of items) {
            const actualQuantity = await this.getItemQuantity(item);
            expect(
                actualQuantity,
                `Expected quantity of item "${item.name}" to be ${expectedQuantity}, but found ${actualQuantity}`
            ).to.equal(expectedQuantity);
        }
    }

    async removeItemFromCart(itemName: string, world?: CustomWorld) {
        const item = await this.getItemByName(itemName);
        if (!item) throw new Error(`Item "${itemName}" not found`);

        if (!item.button) {
            throw new Error(`Button not found for item "${itemName}"`);
        }

        await item.button.click();

        // Update the world cart
        if (world?.cartItems) {
            world.cartItems = world.cartItems.filter(ci => ci.name !== itemName);
        }
    }


    async removeItemsFromCart(itemNames: string[], world: CustomWorld) {
        for (const itemName of itemNames) {
            await this.removeItemFromCart(itemName, world);
        }
    }


        /**
     * Verify that all items in the cart match the items stored in world
     * @param expectedItems - array of items from world.cartItems
     */
    
    async verifyCartItemsMatchWorld(world: CustomWorld): Promise<void> {
        const actualItems = await this.getAllItems();
        const expectedItems = world.cartItems;

        for (const expected of expectedItems) {
            const actual = actualItems.find(i => i.name === expected.name);
            expect(actual, `Item "${expected.name}" should be present in cart`).to.exist;

            if (actual) {
                // Normalize actual and expected prices to numbers before comparison
                const actualPrice = extractNumericPart(actual.price);
                const expectedPrice = typeof expected.price === 'string'
                    ? extractNumericPart(expected.price)
                    : expected.price;

                expect(actual.description, `Description mismatch for "${expected.name}"`)
                    .to.equal(expected.description);

                expect(
                    actualPrice,
                    `Price mismatch for "${expected.name}". Expected ${expectedPrice}, but got ${actualPrice}`
                ).to.equal(expectedPrice);
            }
        }
    }

    async clickOnCheckOut(){
        const checkoutBtn = await CartPageSelectors.checkoutButton();
        await checkoutBtn.click();
    }


}
