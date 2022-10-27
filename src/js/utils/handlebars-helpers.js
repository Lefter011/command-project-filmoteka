
const handlebars = require('handlebars');

//Dateformat helper
handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

//Custom Math toFixed helper
handlebars.registerHelper('toFixed', (number, digits) => {
    number = Number(number);
    if (Number.isNaN(number) || !Number.isInteger(digits)) {
    throw new TypeError('expected a number and an integer digit');
    }
    return number.toFixed(digits);
});