const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    execTimeout: 600,
    taskTimeout: 60000,
    pageLoadTimeout: 50000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    browser: 'chrome',
    headless: false,
    downloadsFolder: 'cypress\downloads',
    retries: {
      'runMode':0,
      'openMode':0
    },
    screenshotsFolder: 'E2EScreenshot',
    videosFolder: 'E2EExecutionVideos',
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
