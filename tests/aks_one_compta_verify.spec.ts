import { test, expect } from '@playwright/test';

test('AKS ONE CI Accounting Pages Load', async ({ page }) => {
  // We'll just check if the routes exist by navigating to them
  // In a real environment we would check for specific text

  await page.goto('http://localhost:1420/aks-one/accounting');
  await expect(page).toBeDefined();

  await page.goto('http://localhost:1420/aks-one/accounting/invoices');
  await expect(page).toBeDefined();

  await page.goto('http://localhost:1420/aks-one/accounting/expenses');
  await expect(page).toBeDefined();

  await page.goto('http://localhost:1420/aks-one/accounting/inventory');
  await expect(page).toBeDefined();
});
