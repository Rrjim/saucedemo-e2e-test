import { expect } from "chai";
import CustomWorld from "../../features/step-definitions/world";
import InventoryPage from "../Inventory/InventoryPage";
import { extractNumericPart } from "../../../utils/data/stringOperations";
import { InventoryItem } from "../Inventory/InventoryItem";
import { ENV } from "../../../config/env";

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

  async verifyInventoryField<T extends keyof InventoryItem>(
    field: T,
    expectedValues: string[],
    partialMatch = false,
    getMessage?: (expectedValue: string) => string
  ): Promise<void> {
    const items = await this.getAllItems();

    const actualValues = await Promise.all(
      items.map(async (item) => {
        if (field === "imageElem")
          return await item.imageElem.getAttribute("src");
        // @ts-ignore
        return item[field];
      })
    );

    for (const expected of expectedValues) {
      const found = actualValues.includes(expected);

      expect(
        found,
        getMessage
          ? getMessage(expected)
          : `Expected ${String(field)} value "${expected}" was not found`
      ).to.be.true;
    }
  }

  async verifyInventoryNames(): Promise<void> {
    const expectedNames = Object.values(ENV.INVENTORY).map((p) => p.name);
    await this.verifyInventoryField(
      "name",
      expectedNames,
      false,
      (field) =>
        `Inventory name mismatch: expected "${field}" to exist among products`
    );
  }

  async verifyInventoryDescriptions(): Promise<void> {
    const expectedDescriptions = Object.values(ENV.INVENTORY).map(
      (p) => p.desc
    );
    await this.verifyInventoryField(
      "description",
      expectedDescriptions,
      false,
      (field) =>
        `Inventory description mismatch: expected "${field}" to exist among products`
    );
  }

  async verifyInventoryPrices(): Promise<void> {
    const expectedPrices = Object.values(ENV.INVENTORY).map((p) => p.price);
    await this.verifyInventoryField(
      "price",
      expectedPrices,
      false,
      (field) =>
        `Inventory price mismatch: expected "${field}" to exist among products`
    );
  }

  async verifyInventoryImages(): Promise<void> {
    const expectedImages = Object.values(ENV.INVENTORY).map((p) => p.img);
    await this.verifyInventoryField(
      "imageElem",
      expectedImages,
      true,
      (field) =>
        `Inventory image mismatch: expected image containing "${field}" to exist`
    );
  }
}
