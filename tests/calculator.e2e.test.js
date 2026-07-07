const { expect, test } = require("@playwright/test");

test("calcula soma pela interface", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Primeiro numero").fill("10");
  await page.getByLabel("Operacao").selectOption("sum");
  await page.getByLabel("Segundo numero").fill("5");
  await page.getByRole("button", { name: "Calcular" }).click();

  await expect(page.getByText("Resultado: 15")).toBeVisible();
});

test("calcula multiplicacao pela interface", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Primeiro numero").fill("6");
  await page.getByLabel("Operacao").selectOption("multiply");
  await page.getByLabel("Segundo numero").fill("7");
  await page.getByRole("button", { name: "Calcular" }).click();

  await expect(page.getByText("Resultado: 42")).toBeVisible();
});
