const { join } = require("node:path");
const { config: baseConfig } = require('./wdio.shared.local.appium.conf.js');

exports.config = {
    ...baseConfig,
    //
    // ======
    // Specs
    // ======
    //
    specs: ["../tests/specs/**/app*.spec.js"],
    //
    // ============
    // Capabilities
    // ============
    //
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: "Android",
            "wdio:maxInstances": 1,
            'appium:deviceName': 'Android Emulator',
            'appium:platformVersion': '13',
            //"appium:orientation": "PORTRAIT",
            'appium:automationName': 'UiAutomator2',
            // The path to the app
            "appium:app": join(
                process.cwd(),
                "apps",
                //
                // NOTE: Change this name according to the app version you downloaded
                "android.wdio.native.app.v2.0.0.apk"
            ),
            'appium:autoGrantPermissions': true,
            "appium:newCommandTimeout": 240
        },
    ]
};