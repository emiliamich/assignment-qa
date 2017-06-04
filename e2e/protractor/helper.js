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
  }
};