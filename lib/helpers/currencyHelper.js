module.exports.round = function (value, decimals) {
    const number = Number(`${value}e${decimals}`);
    const roundedValue = Math.round(number);

    return Number(`${roundedValue}e-${decimals}`);
};