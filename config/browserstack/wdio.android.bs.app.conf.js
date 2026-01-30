const { config: baseConfig } = require('../wdio.shared.conf.js');

exports.config = {
    ...baseConfig,
    logLevel: 'info',
    maxInstances: 1,

    // ======
    // Specs
    // ======
    specs: ["../../tests/specs/**/app*.spec.js"],

    // =============================
    // Browserstack specific config
    // =============================
    // User configuration
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    // Use browserstack service
    services: [
        ...(baseConfig.services || []),
        ['browserstack', { buildIdentifier: `${Date.now()}`, browserstackLocal: false }]
    ],
    // ============
    // Capabilities
    // ============
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel 7',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://45e6d3f083e82753e319f152e1687a3d89dfcc2c',
        'bstack:options': {
          debug: true,
          projectName: 'Native Demo App',
          buildName: 'Login e Cadastro',
          sessionName: 'Full Tests'
        }
    }]
};