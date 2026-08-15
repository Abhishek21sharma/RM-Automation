import { Page } from "@playwright/test";
import { Cart } from "./cart.page";
import { Login } from "./login.page";
import { AddToCart } from "./add-to-cart.page";
import { CheckoutInformation } from "./checkout-information.page";

export class PageManager {
  private _login?: Login;
  private _cart?: Cart;
  private _add_to_cart?: AddToCart;
  private _checkout_information?: CheckoutInformation;
  constructor(private page: Page) {}

  get login() {
    return (this._login ??= new Login(this.page));
  }

  get cart() {
    return (this._cart ??= new Cart(this.page));
  }

  get addToCart() {
    return (this._add_to_cart ??= new AddToCart(this.page));
  }

  get checkoutInfo() {
    return (this._checkout_information ??= new CheckoutInformation(this.page));
  }
}
