module.exports.round = function (value, decimals) {
    const number = Number(`${value}e${decimals}`);
    const roundedValue = Math.round(number);

    return Number(`${roundedValue}e-${decimals}`);
};

module.exports.convertFromDollarsToCents = function (dollars) {
    if (dollars === null) {
        return null;
    }

    const cents = numeral(dollars).multiply(100).value();

    return round(cents, 0);
};