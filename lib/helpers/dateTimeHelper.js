const moment = require("moment");

const { dateTimeFormat } = require("../constants/dateTimeFormats");

module.exports.currentDateTime = function(format = dateTimeFormat) {
    return moment().format(format);
};

module.exports.getCurrentWeekday = function () {
    return moment().weekday();
};