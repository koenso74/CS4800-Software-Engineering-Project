import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  fullyParallel: false,
  use: {
    baseURL: 'http://127.0.0.1:5173',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  webServer: [
    { command: 'node server/src/index.js', url: 'http://127.0.0.1:5000/api/health', reuseExistingServer: true, env: { ...process.env, MONGODB_URI: '', VERCEL: '' } },
    { command: 'vite --config vite.e2e.config.js --host 127.0.0.1', url: 'http://127.0.0.1:5173', reuseExistingServer: true }
  ]
});
