import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  use: {
    baseURL: "http://127.0.0.1:1313",
    headless: true,
  },

  webServer: {
    command: "hugo server --bind 127.0.0.1 --port 1313",
    url: "http://127.0.0.1:1313",
    reuseExistingServer: true,
    timeout: 120000,
  },
});