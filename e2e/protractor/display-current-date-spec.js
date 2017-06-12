describe('pets homepage list', function() {
    var helper = require('./helper');

    xit('should display the date', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var curDateExp = element(by.className('banner-date'));
        expect(curDateExp.isDisplayed()).toBeTruthy();

        browser.waitForAngularEnabled(true);
    });

    xit('should displayed date match current date', function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var curDateExp = element(by.className('banner-date'));
        expect(curDateExp.getText()).toBe(helper.getCurrentDate());

        browser.waitForAngularEnabled(true);
    });


    xit('should the banner be black', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var color = element(by.className('assignment-masthead'));
        expect(color.getCssValue('background-color')).toBe('rgba(51, 51, 51, 1)');

        browser.waitForAngularEnabled(true);
    });

});



