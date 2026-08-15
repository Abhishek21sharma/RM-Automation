import { PageManager } from "@/pages/page-manager.page";
import { test as base } from "@playwright/test";

export type TestOptions = {
  pm: PageManager;
};

export const test = base.extend<TestOptions>({
  pm: async ({ page }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});

export { expect } from "@playwright/test";
