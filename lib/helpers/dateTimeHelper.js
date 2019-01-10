const moment = require("moment");

const { dateTimeFormat } = require("../constants/dateTimeFormats");

module.exports.currentDateTime = function(format = dateTimeFormat) {
    return moment().format(format);
};

module.exports.getCurrentWeekday = function (timeZone) {
    return timeZone ?  moment().utcOffset(timeZone).weekday() : moment().weekday();
};

module.exports.getWeekdayForDate = function (date) {
    return moment(date).weekday();
};