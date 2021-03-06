/*
Primera parte:
Crear una función con tres parámetros que sean números que se suman entre sí.
Llamar a la función en el main y darle valores.
*/

function suma(p1,p2,p3){
    return p1+p2+p3;
}

/*
Crear una clase coche.
Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
Una función que incremente el número de puertas que tiene el coche.
Crear un objeto miCoche en el main y añadirle una puerta.
Mostrar el número de puertas que tiene el objeto.
*/ 

class Coche{
    constructor(num){
    this.num = num;
    }
    incrementar(){
      let inc = this.num++;
      return `Este coche esta aumenta sus puertas a ${inc}`;
    }
}

//MAIN
const main = function(){
    const resultado = suma(1,4,3);
    let miCoche = new Coche(1);

    console.log(miCoche.incrementar())//'Este coche esta aumenta sus puertas a 1'
    miCoche.incrementar()//'Este coche esta aumenta sus puertas a 2'
    miCoche.incrementar()//'Este coche esta aumenta sus puertas a 3'
    console.log(miCoche.incrementar())//'Este coche esta aumenta sus puertas a 7'

    console.log(`El resultado de la suma de numeros es ${resultado}`)
}
main()