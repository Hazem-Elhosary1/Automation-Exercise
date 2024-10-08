const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
    addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
    preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
    );

    return config;
}

module.exports = defineConfig({
    projectId: 'y8hje9',
    e2e: {
        setupNodeEvents,
        specPattern: ["cypress/integration/**/*.feature", "cypress/integration/**/{*.spec,*.cy}", "cypress/integration/**/*.Feature"],
        baseUrl: "https://www.automationexercise.com",
        screenshotsFolder: "./cypress/screenshots",
        screenshotOnRunFailure: true,

    },



}, )