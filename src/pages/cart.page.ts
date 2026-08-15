import { Locator, Page } from "@playwright/test";
export class Cart {
  readonly page: Page;
  readonly shoppingCart: Locator;
  readonly checkoutBtn: Locator;
  readonly cartItem: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = this.page.locator(".shopping_cart_badge");
    this.checkoutBtn = this.page.getByRole("button", { name: "Checkout" });
    this.cartItem = this.page.getByTestId("cart_item_label");
    this.productName = this.page.getByTestId("inventory-item-name");
    this.productPrice = this.page.getByTestId("inventory-item-price");
  }

  async getTile() {
    return await this.page.title();
  }

  async navToCart() {
    await this.shoppingCart.click();
  }

  async checkOut() {
    await this.checkoutBtn.click();
  }

  async getProductName() {
    return await this.productName.innerText();
  }
  async getProductPrice() {
    const priceWithCurrency = await this.productPrice.innerText();
    const price = priceWithCurrency.replaceAll("$", "");
    return parseFloat(price);
  }
}
