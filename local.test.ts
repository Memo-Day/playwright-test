import { test, expect } from '@playwright/test';

test('page locale simple', async ({ page }) => {
  // Charge une page HTML simple en inline (data URL)
  await page.goto('data:text/html,<h1>Bonjour Playwright</h1>');
  await expect(page.locator('h1')).toHaveText('Bonjour Playwright');
});
