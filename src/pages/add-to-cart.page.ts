import { Locator, Page } from "@playwright/test";
export class AddToCart {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly shoppingCart: Locator;
  private addToCart = "Add to cart";

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = this.page.locator(
      ".inventory_container .inventory_list .inventory_item",
    );
    this.shoppingCart = this.page.locator(".shopping_cart_badge");
  }

  async selectItem(itemName: string) {
    //date to be picked from data file..
    const item = this.inventoryItems.filter({ hasText: itemName });
    await item.getByRole("button", { name: this.addToCart }).click();
  }

  async shoppingCartCount(): Promise<string> {
    return await this.shoppingCart.innerText();
  }
}
