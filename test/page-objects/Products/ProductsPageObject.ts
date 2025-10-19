import { expect } from "chai";
import CustomWorld from "../../features/step-definitions/world";
import InventoryPage from "../Inventory/InventoryPage";
import { extractNumericPart } from "../../../utils/data/stringOperations";
import { InventoryItem } from "../Inventory/InventoryItem";
import { ENV } from "../../../config/env";
import { ProductsPageSelectors } from "./ProductsPageSelectors";

/** Map product names to ENV.INVENTORY keys */
const productKeyMap: Record<string, keyof typeof ENV.INVENTORY> = {};
for (const key in ENV.INVENTORY) {
    const item = ENV.INVENTORY[key as keyof typeof ENV.INVENTORY];
    if (item && typeof item === "object" && "name" in item) {
        productKeyMap[item.name] = key as keyof typeof ENV.INVENTORY;
    }
}

/** Mapping from ProductPage fields to ENV.INVENTORY keys */
const fieldMap: Record<string, keyof typeof ENV.INVENTORY[keyof typeof ENV.INVENTORY]> = {
    description: "desc",
    price: "price",
    imageElem: "img",
};

export default class ProductsPage extends InventoryPage {
  async toggleItemButton(
    item: InventoryItem,
    targetState: "Add to cart" | "Remove"
  ) {
    const currentText = await item.button.getText();

    if (currentText !== targetState) {
      await item.button.click();
      await browser.waitUntil(
        async () => (await item.button.getText()) === targetState,
        {
          timeout: 3000,
          timeoutMsg: `Button for "${item.name}" did not change to "${targetState}"`,
        }
      );
    }
  }

  async addItemToCart(itemName: string, world: CustomWorld) {
    const item = await this.getItemByName(itemName);
    if (!item) throw new Error(`Item "${itemName}" not found`);

    await this.toggleItemButton(item, "Remove");

    if (world) {
      const price = extractNumericPart(item.price);
      const description = item.description;
      const imageSrc = (await item.imageElem.getAttribute("src")).toString();
      world.cartItems.push({ name: itemName, description, price, imageSrc });
    }
  }

  async addItemsToCart(itemNames: string[], world: CustomWorld): Promise<void> {
    for (const itemName of itemNames) {
      await this.addItemToCart(itemName, world);
    }
  }

  /** Verify a single product field based on product name */
   async verifyProductField<T extends keyof InventoryItem>(
  productName: string,
  field: T,
  partialMatch = false,
  expectedOverride?: string
): Promise<void> {
  const items = await this.getAllItems();
  const product = items.find(i => i.name === productName);

  if (!product) throw new Error(`Product "${productName}" not found`);

  let expectedValue: string;
  if (expectedOverride !== undefined) {
    expectedValue = expectedOverride;
  } else {
    const inventoryKey = productKeyMap[productName];
    const expectedKey = fieldMap[field as string];
    expectedValue = ENV.INVENTORY[inventoryKey][expectedKey];
  }

  let actualValue: string;
  if (field === "imageElem") {
    actualValue = await product.imageElem?.getAttribute("src") ?? '';
  } else {
    // @ts-ignore
    actualValue = product[field] ?? '';
  }

  const matched = partialMatch
    ? actualValue.includes(expectedValue)
    : actualValue === expectedValue;

  expect(
    matched,
    `Product "${productName}" ${field} mismatch: expected "${expectedValue}", but found "${actualValue}"`
  ).to.be.true;
}


    
     /** Clicks the filter dropdown and waits until options are visible */
    async verifyFilterDropdownDisplayed(): Promise<void> {
        const dropdown = ProductsPageSelectors.filterDropdown(); // $ selector
        await dropdown.waitForDisplayed({ timeout: 5000 });
        await dropdown.click();

        // Wait for the options to appear
        const options = await ProductsPageSelectors.filterOptions(); // should return array of $ elements
        await browser.waitUntil(
            async () => (await options.length) > 0,
            { timeout: 5000, timeoutMsg: 'Filter options did not appear' }
        );

        expect(options.length, 'Filter dropdown options should be visible').to.be.gt(0);
    }

    /** Verify products are sorted according to selected filter */
    async verifySorting(sortType: 'az' | 'za' | 'lohi' | 'hilo'): Promise<void> {
        const dropdown = ProductsPageSelectors.filterDropdown();

        // Apply the sort
        switch (sortType) {
            case 'az':
                await dropdown.selectByAttribute('value', 'az');
                break;
            case 'za':
                await dropdown.selectByAttribute('value', 'za');
                break;
            case 'lohi':
                await dropdown.selectByAttribute('value', 'lohi');
                break;
            case 'hilo':
                await dropdown.selectByAttribute('value', 'hilo');
                break;
            default:
                throw new Error(`Unsupported sort type: ${sortType}`);
        }

        // Wait briefly for sorting to take effect
        await browser.pause(500);

        // Get actual products from the page
        const actualProducts = await this.getAllItems(); // [{name, price, ...}]
        const actualNames = actualProducts.map(p => p.name);

        // Compute expected order based on initial data
        let expectedProducts = [...actualProducts];

        switch (sortType) {
            case 'az':
                expectedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'za':
                expectedProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'lohi':
                expectedProducts.sort((a, b) => parseFloat(a.price.replace('$','')) - parseFloat(b.price.replace('$','')));
                break;
            case 'hilo':
                expectedProducts.sort((a, b) => parseFloat(b.price.replace('$','')) - parseFloat(a.price.replace('$','')));
                break;
        }

        const expectedNames = expectedProducts.map(p => p.name);

        expect(actualNames, `Products should be sorted by ${sortType}`).to.deep.equal(expectedNames);
    }

}
