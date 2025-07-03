import { test, expect } from '@playwright/test';

test.describe.only('Snapshots', () => {
  test.beforeEach(async ({ page }) => {
    // Naviguer sur la page principale Wikipedia en français avant chaque test
    await page.goto('http://localhost:5000/');
   
  });

  test('Je trouve le bouton', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('button.png')
  });
});