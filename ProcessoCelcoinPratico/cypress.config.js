const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  viewportHeight: 900,
  viewportWidth: 1300,
  video: false,
  defaultCommandTimeout: 25000,
  screenshotOnRunFailure: false,
  retries: 0,
  numTestsKeptInMemory: 10,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
