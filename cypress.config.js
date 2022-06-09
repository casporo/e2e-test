const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  userAgent: "cypress-e2e/v1.0.0",
  viewportWidth: 1400,
  viewportHeight: 900,
  blockHosts: [
    "*hotjar.com",
    "*jsdelivr.net",
    "*taboola.com",
    "*braze.com",
    "*scorecardresearch.com",
    "*sentry.io",
    "*adsrvr.org",
    "*googlesyndication.com",
  ],
});
