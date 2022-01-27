
module.exports = { 
    config : {
        firefoxLaunchOptions: {
            args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
            headless: false,
            firefoxUserPrefs: {
                'media.navigator.streams.fake': true,
                'media.navigator.permission.disabled': true,           
            }
        },
        chromeLaunchOptions: {
            args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
            headless: false,
            firefoxUserPrefs: {
                'media.navigator.streams.fake': true,
                'media.navigator.permission.disabled': true,           
            }
        },
        webkitLaunchOptions: {
            firefoxUserPrefs: {
                'media.navigator.streams.fake': true,
                'media.navigator.permission.disabled': true,           
            }
        }
    }    
};