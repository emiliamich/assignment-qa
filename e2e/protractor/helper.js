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
        var petName = element.all(by.className('pet-name')).first();
        petName.sendKeys(name);
        var petStatus = element.all(by.className('pet-status')).first();
        petStatus.sendKeys(status);
        var create = element(by.id('btn-create'));
        create.click();
    },
    clearDB(jsonFile) {
        fs.readFile(jsonFile, function(err, content) {
            if(err) throw err;
            var parseJson = JSON.parse(content);
            parseJson.pets = [];
            fs.writeFile(jsonFile, JSON.stringify(parseJson), function(err) {
                if(err) throw err;
            })
        })
    },
    add100ItemsToPetStore(jsonFile) {
        fs.readFile(jsonFile, function(err, content) {
            if(err) throw err;
            var parseJson = JSON.parse(content);
            parseJson.pets = [];
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