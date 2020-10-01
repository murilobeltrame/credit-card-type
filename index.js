var creditCardType = require('credit-card-type');

var args = process.argv;
var cardBin = args[2];

var cardType = creditCardType(cardBin);
console.log(cardType);