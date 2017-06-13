var fs = require('fs');

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
    clearDB(jsonFile) {
        fs.readFile(jsonFile, function(err, content) {
            if(err) throw err;
            var parseJson = JSON.parse(content);
            parseJson.pets.clear();
        })
    },
    add100ItemsToPetStore(jsonFile) {
        this.clearDB(jsonFile);
        fs.readFile(jsonFile, function(err, content) {
            if(err) throw err;
            var parseJson = JSON.parse(content);
            for (i = 0; i < 100 ; i++){
                parseJson.pets.push({
                    "name": "rex",
                    "status": "alive",
                    "id": i + 1
                })
            }
            fs.writeFile(jsonFile, JSON.stringify(parseJson), function(err) {
                if(err) throw err;
            })
        })
    }
};