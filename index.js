const PrimeNumber = require('./model/primeModel')

let generator= new PrimeNumber();
/*Cambiar valor */
let num=10;
console.log(generator.generatedPrimeNumbers(num).length);