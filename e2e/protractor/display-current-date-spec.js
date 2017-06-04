describe('pets homepage list', function() {
    var helper = require('./helper');

    it('should display current date', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:4200');

        var curDateExp = element(by.className('banner-date'));
        expect(curDateExp.isDisplayed()).toBeTruthy();
        expect(curDateExp.getText()).toBe(helper.getCurrentDate());

        browser.waitForAngularEnabled(true);
    });
});



