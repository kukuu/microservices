"use strict";

var request = require("request-promise-native");
const baseUrl = "http://127.0.0.1:8000";

module.exports = {
  getAllExpenses: function () {
    let options = {
      url: `${baseUrl}/expenses/`,
    };
    return request.get(options);
  },
  getExpense: function (expenseId) {
    console.log("Expenseservice::getExpense()" + expenseId);
    let options = {
      url: `${baseUrl}/expenses/${expenseId}`,
    };
    return request.get(options);
  },
};
