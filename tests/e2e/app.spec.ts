import { expect, test } from "@playwright/test";
test("drops a message", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Your message").fill("Hello mesh");
  await page.getByRole("button", { name: "Drop message" }).click();
  await expect(page.getByText("Hello mesh", { exact: true })).toBeVisible();
});
