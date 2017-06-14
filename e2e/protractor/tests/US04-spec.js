var helper = require('../helper');

describe('US04 - Pet store home page', function() {
    var jsonFile = helper.getJsonPath();

    beforeAll(function() {
        helper.clearDB(jsonFile);
        helper.addItemsToPetStore(jsonFile, 1);
    });

    afterAll(function(){
        helper.clearDB(jsonFile);
    });
    
    it('should update an existing pet by pressing ENTER key', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        //iteration of the table an finding elements
        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr")).last();
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

        cells.first().click();
        var petName = element.all(by.className('pet-name')).last();
        petName.clear();
        petName.sendKeys('update name');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();



        cells.first().click();
        var petStatus = element.all(by.className('pet-status')).last();
        petStatus.clear();
        petStatus.sendKeys('update status');
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

       expect(cells.get(0).getText()).toBe('update name');
       expect(cells.get(1).getText()).toBe('update status');
      
       browser.waitForAngularEnabled(true);
    });

    it('should be able to discard any update changes by pressing ESC key', function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        //iteration of the table an finding elements
        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr")).last();
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

        var oldPetName = cells.get(0).getText();
        var oldStatus = cells.get(1).getText();

        cells.first().click();
        var petName = element.all(by.className('pet-name')).last();
        petName.clear();
        petName.sendKeys('update name');

        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();

        expect(cells.get(0).getText()).toBe(oldPetName);
        expect(cells.get(1).getText()).toBe(oldStatus);

        browser.waitForAngularEnabled(true);
    });

    it('should update an existing pet by clicking outside the edition zone', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        //iteration of the table an finding elements
        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr")).last();
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

        cells.first().click();
        var petName = element.all(by.className('pet-name')).last();
        petName.clear();
        petName.sendKeys('update 1');

        var table = element(by.className('table table-hover'));
        browser.actions().mouseDown(table).perform();
        browser.sleep(1000);
        browser.actions().mouseUp(table).perform();

        expect(cells.get(0).getText()).toBe('update 1');
      
        browser.waitForAngularEnabled(true);
    });
});



