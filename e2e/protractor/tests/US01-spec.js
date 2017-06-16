var helper = require('../helper');

describe('US01 - pet store home page', function() {

    it('should display the date', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var curDateExp = element(by.className('banner-date'));
        expect(curDateExp.isDisplayed()).toBeTruthy();

        browser.waitForAngularEnabled(true);
    });

    it('should displayed a date witch match current date', function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var curDateExt = element(by.className('banner-date'));
        expect(curDateExt.getText()).toBe(helper.getCurrentDate());

        browser.waitForAngularEnabled(true);
    });


    it('should the banner be black', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var color = element(by.className('assignment-masthead'));
        expect(color.getCssValue('background-color')).toBe('rgba(51, 51, 51, 1)');

        browser.waitForAngularEnabled(true);
    });

});



