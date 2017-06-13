var helper = require('../helper');

describe('US03 - pet store home page', function() {

    // create new user
    it('should create new pet by clicking Create button', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        helper.createPet('rex','alive');

        //iteration of the table an finding elements
        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr:nth-last-child(1)"));
        //Get All Cells
        var cells = rows.all(by.tagName("td"));
    
        expect(cells.get(0).getText()).toBe('rex');
        expect(cells.get(1).getText()).toBe('alive');

        browser.waitForAngularEnabled(true);
    });

    //user is able to press enter key and create the new pet

    // create new user
    it('should create new pet by pressing Enter key on Create button', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element.all(by.className('pet-name')).first();
        petName.sendKeys('rex');
        var petStatus = element.all(by.className('pet-status')).first();
        petStatus.sendKeys('alive');
        var create = element(by.id('btn-create'));
        
        var create = browser.actions().sendKeys(protractor.Key.ENTER);
        create.perform();

        browser.waitForAngularEnabled(true);
    });


    it('should follow tab sequence Name Status Create', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element.all(by.className('pet-name')).first();
        petName.sendKeys('focus name');
        petName.sendKeys(protractor.Key.TAB);
          
        var petStatus = browser.driver.switchTo().activeElement();
        petStatus.sendKeys("focus status");
        petStatus.sendKeys(protractor.Key.TAB);
              
        var create = element(by.id('btn-create'));
        expect(create.getAttribute('id')).toBe(browser.driver.switchTo().activeElement().getAttribute('id'));

        browser.waitForAngularEnabled(true);
    });


    // verify if name and status are manadatory (bug are not)
    it('should name and status be mandatory', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element.all(by.className('pet-name')).first();
        var petStatus = element.all(by.className('pet-status')).first();
       
        var create = element(by.id('btn-create'));
        expect(create.isEnabled()).toBe(false);

        browser.waitForAngularEnabled(true);
    });
});



