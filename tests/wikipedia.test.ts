import { test, expect } from '@playwright/test';

test.describe('Wikipedia Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Naviguer sur la page principale Wikipedia en français avant chaque test
    await page.goto('https://fr.wikipedia.org/wiki/Wikipédia:Accueil_principal');
    // Vérifier que la page est bien en français
    await expect(page.locator('strong:has-text("français")')).toBeVisible();
  });

  test('Rechercher Informatique sur Wikipedia', async ({ page }) => {
    // Sélectionner la barre de recherche, taper "informatique" et valider
    const searchInput = page.locator('[placeholder="Rechercher sur Wikipédia"]');
    await searchInput.click();
    await searchInput.fill('informatique');

    // Optionnel: attendre que les suggestions apparaissent
    await expect(page.locator('#searchform-suggestions')).toBeVisible();

    await searchInput.press('Enter');

    // Vérifier que le titre de la page est bien "Informatique"
    await expect(page.locator('h1')).toHaveText('Informatique');
  });
});
