const PrimeNumber=require('../model/primeModel');
const Validate=require('../model/validate');

describe("Test de la clase PrimeNumber",function(){
    let a =new PrimeNumber();
    
    it("probando creacion de objeto ", function(){
       expect(typeof a).toBe("object")
    });
   
   
    it('Probando metodo de generacion con entrada numerica', function(){
        let result=a.generatedPrimeNumbers(10);
        expect(result).toEqual([7,5,3,2])
    });
    it('Probando metodo de generacion con entrada alfabetica', function(){
        let result2=a.generatedPrimeNumbers("A")
        expect(result2.length).toBe(0)
    });
});

describe("Validación de entrada", function(){
    it('Probando metodo de validacion de entrada', function(){
        expect(Validate.vaidateInt(1)).toBe(true)
    });
    it('Probando metodo de validacion de con error', function(){
        expect(Validate.vaidateInt("A")).toBe(false)
    });
});


describe("Validación de primalidad",function(){
    let a =new PrimeNumber();
    it('Probando metodo de validacion de primalidad', function(){
     
        expect(a.isPrime(10)).toBe(false)
    });
    it('Probando metodo de validacion de primalidad', function(){
     
        expect(a.isPrime(17)).toBe(true)
    });
})