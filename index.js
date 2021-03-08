const PrimeNumber = require('./model/primeModel')

let generator= new PrimeNumber();

console.log(generator.generatedPrimeNumbers("a").length);