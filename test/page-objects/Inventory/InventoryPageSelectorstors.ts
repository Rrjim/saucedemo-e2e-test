export const InventoryPageSelectors = {
    // Single element
    pageSubHeader: () => $('[data-test=secondary-header] > span'),

    // Dynamic list of inventory items
    inventoryItems: () => $$("[data-test='inventory-item']"),

    // Child elements for a single inventory item (pass the parent item as argument)
    itemImageAnchor: (item: WebdriverIO.Element) => item.$('.inventory_item_img a'),
    itemImage: (item: WebdriverIO.Element) => item.$('img'),
    itemName: (item: WebdriverIO.Element) => item.$('[data-test="inventory-item-name"]'),
    itemDescription: (item: WebdriverIO.Element) => item.$('[data-test="inventory-item-desc"]'),
    itemPrice: (item: WebdriverIO.Element) => item.$('[data-test="inventory-item-price"]'),
    itemButton: (item: WebdriverIO.Element) => item.$('.pricebar button'),
    itemQuantity: (item: WebdriverIO.Element) => item.$('[data-test=item-quantity]'),
    filterDropdown: () => $('[data-test=product-sort-container]'),
    cartAddedItems: () => $('[data-test=shopping-cart-badge]'),

};
