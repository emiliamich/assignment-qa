module.exports = {
  getCurrentDate: function() {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      if(day < 10) {
          day = '0' + day;
      }

      if(month < 10) {
          month = '0' + month;
      }

      return day + "-" + month + "-" + year;
  },
   createPet: function(name, status) {
        var petName = element(by.className('pet-name'));
        petName.sendKeys(name);
        var petStatus = element(by.className('pet-status'));
        petStatus.sendKeys(status);
        var create = element(by.id('btn-create'));
        create.click();
   },
   clearDBPets: function(buttons) {
        buttons.count().then(function(count) {
            console.log(count);
            while(count > 0) {
                buttons.first().click();
                count--;
            }
        });
   }
};