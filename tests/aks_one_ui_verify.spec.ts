import { test, expect } from '@playwright/test';

test('AKS ONE CI Core Pages and Logo', async ({ page }) => {
  // Home Page
  await page.goto('http://localhost:1420/aks-one');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Révolution Numérique en Côte d\'Ivoire')).toBeVisible();
  await expect(page.locator('img[alt="AKS ONE CI Logo"]')).toBeVisible();
  await page.screenshot({ path: 'aks-one-home.png' });

  // Marketplace
  await page.goto('http://localhost:1420/aks-one/marketplace');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Le Grand Marché')).toBeVisible();
  await page.screenshot({ path: 'aks-one-marketplace.png' });

  // Directory
  await page.goto('http://localhost:1420/aks-one/directory');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Trouvez l\'Artisan de Confiance')).toBeVisible();
  await page.screenshot({ path: 'aks-one-directory.png' });

  // Accounting Dashboard
  await page.goto('http://localhost:1420/aks-one/accounting');
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Gestion Comptable')).toBeVisible();
  await page.screenshot({ path: 'aks-one-accounting.png' });
});
