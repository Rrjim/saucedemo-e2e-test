import { expect } from 'chai';
import CustomWorld from '../../features/step-definitions/world';
import InventoryPage from '../Inventory/InventoryPage';
import { extractNumericPart } from '../../../utils/data/stringOperations';

export default class ProductsPage extends InventoryPage {

    async addItemToCart(itemName: string, world: CustomWorld) {
        const item = await this.getItemByName(itemName);
        if (!item) throw new Error(`Item "${itemName}" not found`);

        await this.toggleItemButton(item, 'Remove');

        if (world) {
            const price = extractNumericPart(item.price);
            const description = item.description;
            const imageSrc = (await item.imageElem.getAttribute('src')).toString();
            world.cartItems.push({ name: itemName, description, price, imageSrc  });

        }
    }


    async addItemsToCart(itemNames: string[], world: CustomWorld): Promise<void> {
            for (const itemName of itemNames) {

                await this.addItemToCart(itemName, world);

            }
        }





}
