const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,

  retries: {
    runMode: 3,
    openMode: 3,
  },

  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  viewportHeight: 800,
  viewportWidth: 1280,
  numTestsKeptInMemory: 0,

  e2e: {
    specPattern: 'test/e2e/**/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
