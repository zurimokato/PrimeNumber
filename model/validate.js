module.exports= class Validate{
    constructor(){

    }
    /*
      metodo que valida si la variable es numerica o no
    * @param num variable a validar si es numerica o no
    */
    static vaidateInt(num){
        return Number.isInteger(num);
    }
}