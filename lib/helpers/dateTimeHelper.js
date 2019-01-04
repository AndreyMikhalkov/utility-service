const moment = require("moment");

const { dateTimeFormat } = require("../constants/dateTimeFormats");

module.exports.currentDateTime = function(format = dateTimeFormat) {
    return moment().format(format);
};

module.exports.getCurrentWeekday = function (timeZone) {
    return timeZone ?  moment().utcOffset(timeZone).weekday() : moment().weekday();
};

module.exports.isSame = function (date1, date2, format1 = dateTimeFormat, format2 = dateTimeFormat) {
    return moment.utc(date1, format1).isSame(moment.utc(date2, format2));

};