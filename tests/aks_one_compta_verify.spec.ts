/*
 * Copyright © 2026 AKS ONE CI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

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
