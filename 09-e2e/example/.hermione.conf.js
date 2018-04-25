const path = require('path');

module.exports = {
    sets: {
        desktop: {
            files: 'tests/desktop'
        }
    },

    browsers: {
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    },

    screenshotsDir: test => path.join(path.dirname(test.file), 'screens', test.id(), test.browserId)

    // gridUrl: `http://${process.env.USERNAME}:${process.env.ACCESSKEY}@hub-cloud.browserstack.com:80/wd/hub`
}
