import { InventoryPageSelectors } from './InventoryPageSelectorstors';
import Input from '../../../utils/elements/Input'; 
import Element from '../../../utils/elements/Element'; 
import BasePage from '../Base/BasePage';
import { expect } from 'chai';
import CustomWorld from '../../features/step-definitions/world';
import { InventoryItem } from './InventoryItem';
import { mapTextToNumber } from '../../../utils/data/stringOperations';

export default class InventoryPage extends BasePage {
    /** get all information per reusable react component */
         async getAllItems(): Promise<InventoryItem[]> {
        const items = await InventoryPageSelectors.inventoryItems();
        const data: InventoryItem[] = [];

        for (const item of items) {
            const name = await (await InventoryPageSelectors.itemName(item)).getText();
            const price = await (await InventoryPageSelectors.itemPrice(item)).getText();

            const button = await InventoryPageSelectors.itemButton(item);
            const imageElem = await InventoryPageSelectors.itemImage(item);
            // const imageSrc = await imageElem.getAttribute('src');
            const descElem = await InventoryPageSelectors.itemDescription(item);
            const description = await descElem.getText();
            const quantityElem = await InventoryPageSelectors.itemQuantity(item);
            const quantity = await quantityElem;

            data.push({ name, price, button, description, imageElem, quantity });
        }

        return data;
    }


    /** get specific item based on its name */
    async getItemByName(itemName: string) {
        const items = await this.getAllItems();
        return items.find(i => i.name === itemName);
    }

    /** get number of items */
    async getItemCount() {
        // Call the function to fetch elements at runtime
        const items = await InventoryPageSelectors.inventoryItems();
        return items.length;
    }

    async verifyPageSubheader(expectedHeader: string) {
        const subHeaderElem = await InventoryPageSelectors.pageSubHeader();
        await subHeaderElem.waitForExist({ timeout: 5000 });

        const actualSubHeaderText = await subHeaderElem.getText(); // <-- add await
        console.log(actualSubHeaderText);

        expect(actualSubHeaderText).to.equal(expectedHeader);
    }


    async verifyItemCount(expectedItemsCount: number) {
        const actualCount = await this.getItemCount();
        if(!expectedItemsCount) throw Error(`Invalid number of products provided: ${expectedItemsCount}`)
        expect(actualCount).to.equal(expectedItemsCount);
    }

    async verifyAllPricesAreValid(): Promise<void> {
        const items = await this.getAllItems();
        const numericPrices = mapTextToNumber(items.map(item => item.price));

        numericPrices.forEach((price, index) => {
        expect(price, `Price for item "${items[index].name}" should be > 0`).to.be.greaterThan(0);
        });
    }

    async verifyAllButtonsHaveValidState() {

        const items = await this.getAllItems();
        const buttonTexts = await Promise.all(items.map(item => item.button.getText()));

        console.log('Button texts:', buttonTexts);

        buttonTexts.forEach((text, index) => {
            expect(
                ['Add to cart', 'Remove'],
                `Unexpected button text "${text}" for item "${items[index].name}"`
            ).to.include(text);
        });
    }

    
/** 
 * Ensures all items are in their default state (buttons say "Add to cart").
 * If any button says "Remove", it will be clicked to reset it.
 */
    async removeAllItemsFromCart(): Promise<void> {
        const items = await this.getAllItems();

        for (const item of items) {
            const currentText = await item.button.getText();

            if (currentText === 'Remove') {
                console.log(`Resetting item "${item.name}" to 'Add to cart'`);
                await item.button.click();

                // Optionally wait for text to update
                await browser.waitUntil(
                    async () => (await item.button.getText()) === 'Add to cart',
                    {
                        timeout: 3000,
                        timeoutMsg: `Button for "${item.name}" did not change back to "Add to cart"`,
                    }
                );
            }
        }

        const buttonTexts = await Promise.all(items.map(i => i.button.getText()));
        const nonDefaultButtons = buttonTexts.filter(t => t !== 'Add to cart');
        expect(nonDefaultButtons.length, 'All buttons should now say "Add to cart"').to.equal(0);
    }


    /** get item by index by name */
    async getItemIndexByName(itemName: string) {
        const items = await this.getAllItems();
        const index = items.findIndex(i => i.name === itemName);
        return index >= 0 ? index : null;
    }

    async verifyCartItemCount(expectedCount: number): Promise<void> {
        const badge = await InventoryPageSelectors.cartAddedItems();
        let actualCount = 0;

        if (await badge.isExisting()) {
            actualCount = parseInt(await badge.getText());
        }

        expect(actualCount, `Expected ${expectedCount} items in the cart, but found ${actualCount}`).to.equal(Number(expectedCount));
    }

    async clickOnCartButton(){
        const cartItemLogo = await InventoryPageSelectors.cartAddedItems();
        await cartItemLogo.click();
    }


    async toggleItemButton(item: InventoryItem, targetState: 'Add to cart' | 'Remove') {
        const currentText = await item.button.getText();

        if (currentText !== targetState) {
            await item.button.click();
            await browser.waitUntil(
                async () => (await item.button.getText()) === targetState,
                { timeout: 3000, timeoutMsg: `Button for "${item.name}" did not change to "${targetState}"` }
            );
        }
    }

    async removeItemFromCart(itemName: string, world: CustomWorld) {
    const item = await this.getItemByName(itemName);
    if (!item) throw new Error(`Item "${itemName}" not found`);

    // Click the button to remove the item
    await this.toggleItemButton(item, 'Add to cart'); 

    // Update the world cart
    if (world && world.cartItems) {
        world.cartItems = world.cartItems.filter(ci => ci.name !== itemName);
    }
}




}
