import { Locator, Page } from "@playwright/test";
import { Checkout } from "@/data/types/checkout.type";

export class CheckoutInformation {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly continueBtn: Locator;
  readonly pageTitle: Locator;
  constructor(page: Page) {
    this.page = page;
    this.firstName = this.page.getByPlaceholder("First Name");
    this.lastName = this.page.getByPlaceholder("Last Name");
    this.zipCode = this.page.getByPlaceholder("Zip/Postal Code");
    this.continueBtn = this.page.getByRole("button", { name: "Continue" });
    this.pageTitle = this.page.getByTestId("secondary-header");
  }

  async fillPersonalData(data: Checkout) {
    await this.firstName.fill(data.firstName);
    await this.firstName.fill(data.lastName);
    await this.firstName.fill(data.postCode);
    await this.continueBtn.click();
  }
  async getPageTitle() {
    return await this.pageTitle.innerText();
  }
}
