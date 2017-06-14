var helper = require('../helper');

describe('US02 - pet store home page', function() {
    var jsonFile = helper.getJsonPath();

    beforeAll(function() {
        helper.clearDB(jsonFile);
        helper.addItemsToPetStore(jsonFile, 100);
    });

    afterAll(function(){
        helper.clearDB(jsonFile);
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
    it('should create 100 new pets', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr"));

        expect(rows.count()).toBeGreaterThan(99);

        browser.waitForAngularEnabled(true);
    });
});