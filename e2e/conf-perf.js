exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractor/performance/*spec.js'],
    multiCapabilities: [{
        'browserName': 'chrome'
    }],
     onPrepare: function() {
        beforeEach(function() {
            browser.ignoreSynchronization = true;
        });
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};