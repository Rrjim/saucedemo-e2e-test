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


    async verifyItemCount(expectedItemsCount: string | number) {
        // Convert string to number dynamically
        const expectedCount =
            typeof expectedItemsCount === 'string'
                ? parseInt(expectedItemsCount, 10)
                : expectedItemsCount;

        if (isNaN(expectedCount) || expectedCount < 0) {
            throw new Error(`Invalid number of products provided: ${expectedItemsCount}`);
        }

        const actualCount = await this.getItemCount();
        expect(actualCount, `Expected ${expectedCount} items, but found ${actualCount}`).to.equal(expectedCount);
    }


    async verifyAllPricesAreValid(): Promise<void> {
        const items = await this.getAllItems();
        const numericPrices = mapTextToNumber(items.map(item => item.price));

        numericPrices.forEach((price, index) => {
        expect(price, `Price for item "${items[index].name}" should be > 0`).to.be.greaterThan(0);
        });
    }

    async verifyButtonsCountWithText(expectedText: string, expectedCountStr: string): Promise<void> {
        const expectedCount = parseInt(expectedCountStr, 10);

        if (isNaN(expectedCount)) {
            throw new Error(`Invalid expected count provided: "${expectedCountStr}"`);
        }

        const items = await this.getAllItems();

        // Parallel fetching of button texts for performance
        const buttonTexts = await Promise.all(
            items
                .filter(item => item.button)
                .map(item => item.button!.getText())
        );

        const actualCount = buttonTexts.filter(text => text === expectedText).length;

        expect(
            actualCount,
            `Expected ${expectedCount} buttons with text "${expectedText}", but found ${actualCount}`
        ).to.equal(expectedCount);
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





}
