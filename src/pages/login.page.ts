import { User } from "@/data/types/user.type";
import { Locator, Page } from "@playwright/test";

export class Login {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly login_btn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    this.login_btn = this.page.getByRole("button", { name: "Login" });
  }

  async navTo() {
    await this.page.goto("");
  }

  async login(loginAs: User) {
    await this.userName.fill(loginAs.VALID_USER);
    await this.password.fill(loginAs.VALID_PWD);
    await this.login_btn.click();
  }
}
