import { setWorldConstructor } from '@wdio/cucumber-framework';

interface CartItem {
    name: string;
    description: string;
    price: number;
    imageSrc?: string;                       
}

export default class CustomWorld {
    isLoggedIn: boolean;
    cartItems: CartItem[];

    constructor() {
        this.isLoggedIn = false;
        this.cartItems = [];
    }

    // /** Add an item to the world cart */
    // addItemToCart(name: string, price: number) {
    //     this.cartItems.push({ name, price });
    // }

    /** Get total cart price */
    getCartTotal(): number {
        return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
}

setWorldConstructor(CustomWorld);
