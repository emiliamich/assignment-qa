exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractor/tests/*spec.js'],
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