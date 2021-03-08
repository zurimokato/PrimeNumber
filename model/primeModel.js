const Validate=require('./validate')
module.exports = class PrimeNumber{
    constructor(){
        console.log("PrimeNumber Object generated")
        this.primes=[]
    }

    /*Metodo de generacion de numeros primos dado una untrada n
    *@param num - valor por donde empieza la generación de números primos
    retorna un array con los numeros primos o un array vacio si no se pasa un parametro correcto
    */
    generatedPrimeNumbers(num){
        if(Validate.vaidateInt(num)){
            while(num >=1){
                
                if(this.isPrime(num)){
                    this.primes.push(num)
                }
                num--;
            }

        }else return []
           
        return this.primes;
    }

    /* metodo que devuelve true si el numero ingresado por parametros es primo o no 
    * param @num
    */
    isPrime(num){
        if(num==0 || num ==1 || num ==4)return false
        for(let i=2;i<num;i++){
            if(num %i ==0)return false;
        }

        return true
    }
}