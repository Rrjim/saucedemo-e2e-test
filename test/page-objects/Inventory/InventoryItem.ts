import type { ChainablePromiseElement } from 'webdriverio';

export type InventoryItem = {
    name: string;
    price: string;
    button?: ChainablePromiseElement;        // no generic
    description?: string;
    imageSrc?: string;
    imageElem?: ChainablePromiseElement;    // optional for pages without buttons (cart/checkout)
    quantity?: ChainablePromiseElement;                       // optional for inventory page
};
