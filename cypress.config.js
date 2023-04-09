const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return require("./cypress/plugins/index.js")(on, config);
    },
    testIsolation: false,
  },
});
