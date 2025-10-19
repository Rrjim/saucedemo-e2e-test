import { setWorldConstructor } from "@wdio/cucumber-framework";
import PageFactory from "../../../utils/factories/PageObjectFactory";
import InventoryPage from "../../page-objects/Inventory/InventoryPage";
import LoginPage from "../../page-objects/Login/LoginPage";
import ProductsPage from "../../page-objects/Products/ProductsPageObject";
import CartPage from "../../page-objects/Cart/CartPageObject";
import BasePage from "../../page-objects/Base/BasePage";
import CheckoutCompletePage from "../../page-objects/CheckoutComplete/CheckoutCompletePageObject";
import CheckoutOverviewPage from "../../page-objects/CheckoutOverview/CheckoutOverviewPageObject";
import CommonPage from "../../page-objects/Common/CommonPageObject";
import CheckoutInformationPage from "../../page-objects/CheckoutInformation/CheckoutInformationPageObject";

interface CartItem {
  name: string;
  description: string;
  price: number;
  imageSrc?: string;
}

export default class CustomWorld {
  pageFactory: PageFactory;
  cartItems: CartItem[] = [];

  constructor() {
    this.pageFactory = new PageFactory();
  }

  /** Lazy getters for page objects */
  get inventoryPage(): InventoryPage {
    return this.pageFactory.get(InventoryPage);
  }

  get loginPage(): LoginPage {
    return this.pageFactory.get(LoginPage);
  }

  get productsPage(): ProductsPage {
    return this.pageFactory.get(ProductsPage);
  }

  get cartPage(): CartPage {
    return this.pageFactory.get(CartPage);
  }

  get basePage(): BasePage {
    return this.pageFactory.get(BasePage);
  }

  get checkoutInfoPage(): CheckoutInformationPage {
    return this.pageFactory.get(CheckoutInformationPage);
  }

  get checkoutOverviewPage(): CheckoutOverviewPage {
    return this.pageFactory.get(CheckoutOverviewPage);
  }

  get commonPage(): CommonPage {
    return this.pageFactory.get(CommonPage);
  }

  get checkoutCompletePage(): CheckoutCompletePage {
    return this.pageFactory.get(CheckoutCompletePage);
  }

  /** Get total cart price */
  getCartTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}

setWorldConstructor(CustomWorld);
