var PerfRunner = require('protractor-perf');

describe('US02 - checking the performance load', function() {
     var perfRunner = new PerfRunner(protractor);

     it('should load 100 pet items in less than 2 seconds', function() {
        browser.waitForAngularEnabled(false);
       
        perfRunner.start();
        browser.get('http://localhost:4200');
        perfRunner.stop();

        perfRunner.getStats('meanFrameTime').then(function(time){
            console.log(time);
        });

        if (perfRunner.isEnabled) {
            console.log(perfRunner.getStats('meanFrameTime'));
            expect(perfRunner.getStats('meanFrameTime')).toBeLessThan(2000);
        };

        browser.waitForAngularEnabled(true);
     });
});