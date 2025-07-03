import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 2000,
  retries: 1,
  use: {
    trace: 'on-first-retry', // Enregistre les traces pour le premier échec
  },
  webServer: {
    command: 'npx http-server -p 5000 ./'
    url:'http://localhost:5000/',
    reuseExistingServer: true, // Réutilise le serveur existant s'il est déjà
    timeout: 2_000, // Temps d'attente pour le démarrage du serveur
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    // Brave ne sera pas ici via config
  ],
};

export default config;