var PerfRunner = require('protractor-perf');
var helper = require('../helper');

describe('US02 - checking the performance load', function() {
     var perfRunner = new PerfRunner(protractor, browser);
     var jsonFile = 'd:/protractor/assignment-qa/src/server/db.json';

     beforeAll(function() {
         helper.clearDB(jsonFile);
         helper.add100ItemsToPetStore(jsonFile);
     });

     afterAll(function(){
        helper.clearDB(jsonFile);
     });

     it('should load 100 pet items in less than 2 seconds', function() {      
        perfRunner.start();
        browser.get('http://localhost:4200');
        perfRunner.stop();

        if (perfRunner.isEnabled) {
            //console.log(perfRunner.getStats('meanFrameTime'));
            expect(perfRunner.getStats('meanFrameTime')).toBeLessThan(2000);
        };
     });
});