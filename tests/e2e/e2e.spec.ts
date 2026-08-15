import { test, expect } from "@/fixtures/page-manager.fixture";
import { Login } from "@/pages/login.page";
import { AddToCart } from "@/pages/add-to-cart.page";
import { Cart } from "@/pages/cart.page";
import { CheckoutInformation } from "@/pages/checkout-information.page";
import { PERSONAL_INFO, VALID_USER } from "@/data/user.data";
import { CATALOG } from "@/data/product.data";
import { CONSTANTS } from "@/data/constants.data";

test("e2e test", async ({ page, pm }) => {
  //TC01- landing page test
  pm.login.navTo();
  await expect(page).toHaveURL(/.*saucedemo.*/); //1st assertion

  //TC02 - login page test
  await pm.login.login(VALID_USER);
  expect(await pm.cart.getTile()).toBe("Swag Labs"); //2nd assertion

  //TC03 - add to cart page test
  await pm.addToCart.selectItem(CATALOG.SAUCE_LABS_BACKPACK.name);
  expect(await pm.addToCart.shoppingCartCount()).toBe("1");

  //TC04 - cart page test
  await pm.cart.navToCart();
  expect(await pm.cart.getProductName()).toBe(CATALOG.SAUCE_LABS_BACKPACK.name);
  expect(await pm.cart.getProductPrice()).toBe(
    CATALOG.SAUCE_LABS_BACKPACK.price,
  );
  await pm.cart.checkOut();

  //TC05 - checkout page test
  expect(await pm.checkoutInfo.getPageTitle()).toBe(
    CONSTANTS.PAGE_TITLE.checkoutInfo,
  );
  await page.waitForTimeout(1000);
  await pm.checkoutInfo.fillPersonalData(PERSONAL_INFO);
});
