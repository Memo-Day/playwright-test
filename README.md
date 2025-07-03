# Playwright Tests – Projet Démo

Ce projet contient une suite de tests automatisés réalisés avec [Playwright](https://playwright.dev/) en TypeScript.

## 📋 Fonctionnalités testées

- ✅ Test multi-navigateurs (Chromium, Firefox, Brave)
- ✅ Génération automatique de tests avec l’inspecteur Playwright
- ✅ Rapport HTML interactif
- ✅ Analyse des traces d’exécution
- ✅ Simulation des réponses réseau ("mocking")
- ✅ Snapshots visuels

## 🚀 Lancer les tests

# Installation :
npm init playwright@latest     # Initialise un nouveau projet Playwright
npm install -D @playwright/test # Ajoute Playwright en tant que dépendance de dev
npx playwright install          # Installe les navigateurs (Chromium, Firefox, WebKit)

# Lancer les tests :
npx playwright test             # Lancer tous les tests
npx playwright test fichier.spec.ts # Lancer un test spécifique
npx playwright test --project=chromium  # Lancer les tests sur un seul navigateur

# Générer des rapports : 
npx playwright show-report      # Ouvrir le rapport HTML après un test
npx playwright test --reporter=html # Forcer la génération du rapport HTML

# Inspecteur Interactif :
npx playwright codegen https://exemple.com # Ouvre un navigateur pour enregistrer des actions et générer du code de test

# Traces et debugging : 
npx playwright test --trace=on  # Enregistre les traces pour tous les tests
npx playwright show-trace trace.zip # Ouvre une trace enregistrée

# Capture Snapshots :
await page.screenshot({ path: 'screenshot.png', fullPage: true });

Merci pour votre lecture ! 😊
## Mélanie
