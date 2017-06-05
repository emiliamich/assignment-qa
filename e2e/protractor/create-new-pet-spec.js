describe('pets homepage list', function() {


    it('should create new pet', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var petName = element(by.className('pet-name'));
        petName.sendKeys('rex');
        var petStatus = element(by.className('pet-status'));
        petStatus.sendKeys('alive');
        var create = element(by.id('btn-create'));
        create.click();

        var tableData = element.all(by.className('table-hover'));
        //get Last Rows
        var rows = tableData.all(by.css("tr:nth-last-child(1)"));
        //Get All Cells
        var cells = rows.all(by.tagName("td"));

       expect(cells.get(0).getText()).toBe('rex');
       expect(cells.get(1).getText()).toBe('alive');

        browser.waitForAngularEnabled(true);
    });



});



