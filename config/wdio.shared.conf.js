exports.config = {
    specs: [],
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],
    logLevel: 'debug',
    waitforTimeout: 45000,
    maxInstances: 1,

    services: [],
    framework: 'mocha',
    mochaOpts: { timeout: 60000 },

    capabilities: []
};