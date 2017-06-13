var helper = require('../helper');

describe('US02 - pet store home page', function() {

    beforeAll(function() {
        //browser.waitForAngularEnabled(false);
        //browser.get('http://localhost:4200');

        //for (var i = 0; i < 100; i++) {
        //    helper.createPet('rex','alive');
        //}

        //browser.waitForAngularEnabled(true);
        var jsonFile = '/assignment/src/server/db.json';
        helper.clearDB(jsonFile);
        helper.add100ItemsToPetStore(jsonFile);
    });

    it('should view the list of pets', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr:nth-last-child(1)"));
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

        expect(cells.get(0).getText()).toBe('rex');
        expect(cells.get(1).getText()).toBe('alive');

        browser.waitForAngularEnabled(true);
    });

     // create 100 pets
    xit('should create 100 new pets', function(done) {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr"));

        expect(rows.count()).toBeGreaterThan(99);

        browser.waitForAngularEnabled(true);
    });
});