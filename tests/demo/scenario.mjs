export default async function messageDropScenario(a, b) {
  await a.getByLabel("Your message").fill("The welcome board is ready");
  await a.getByRole("button", { name: "Drop message" }).click();
  await b.getByText("The welcome board is ready", { exact: true }).waitFor({ timeout: 10000 });
  await a.waitForTimeout(1200);
}
