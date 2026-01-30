const { config: baseConfig } = require('./wdio.shared.conf.js');

exports.config = {
    ...baseConfig,
    //
    // ======
    // Appium
    // ======
    //
    services: [
        ...(baseConfig.services || []),
        ['appium', {
            args: {
                relaxedSecurity: true,
                log: './logs/appium.log',
            }
        }]
    ],
    before: async () => {
            // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
            // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
            if (driver.isAndroid){
                await driver.updateSettings({
                    // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
                    waitForSelectorTimeout: 3 * 1000
                });
            }
        }
};