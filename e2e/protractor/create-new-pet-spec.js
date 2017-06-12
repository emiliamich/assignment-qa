var helper = require('./helper');
var PerfRunner = require('protractor-perf');

describe('pets homepage', function() {
     var perfRunner = new PerfRunner(protractor);
     

    // create new user
    xit('should create new pet', function() {
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
    xit('should create new pet by pressing enter key on create button', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element(by.className('pet-name'));
        petName.sendKeys('rex');
        var petStatus = element(by.className('pet-status'));
        petStatus.sendKeys('alive');
        var create = element(by.id('btn-create'));
        
        var create = browser.actions().sendKeys(protractor.Key.ENTER);
        create.perform();

        browser.waitForAngularEnabled(true);
    });


   xit('should follow tab sequence Name Status Create', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element(by.className('pet-name'));
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
     xit('should name and status be mandatory', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element(by.className('pet-name'));
        var petStatus = element(by.className('pet-status'));
       
        var create = element(by.id('btn-create'));
        expect(create.isEnabled()).toBe(false);

        browser.waitForAngularEnabled(true);
    });

    
    // create 100 pets
    xit('should create 100 new pets', function(done) {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        for (var i = 0; i < 100; i++) {
            helper.createPet('rex','alive');
        }

        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr:nth-last-child(1)"));
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

       expect(cells.get(0).getText()).toBe('rex');
       expect(cells.get(1).getText()).toBe('alive');

        browser.waitForAngularEnabled(true);
    });

    
  xit('should update an existing pet', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        //iteration of the table an finding elements
        var tableData = element.all(by.className('table-hover'));
        //get Last Rows 
        var rows = tableData.all(by.css("tr:nth-last-child(1)"));
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

        

        cells.first().click();
        var petName = element.all(by.className('pet-name')).last();
        petName.clear();
        petName.sendKeys('update name');
        var create = browser.actions().sendKeys(protractor.Key.ENTER);
        create.perform();
        cells.first().click();
        var petStatus = element.all(by.className('pet-status')).last();
        petStatus.clear();
        petStatus.sendKeys('update status');
        var create = browser.actions().sendKeys(protractor.Key.ENTER);
        create.perform();

       expect(cells.get(0).getText()).toBe('update name');
       expect(cells.get(1).getText()).toBe('update status');
      
       browser.waitForAngularEnabled(true);
    });

    it('should measure the performance load page for pet list', function() {
       //browser.waitForAngularEnabled(false);
       
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

        //browser.waitForAngularEnabled(true);
    });
});



