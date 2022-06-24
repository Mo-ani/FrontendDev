/*
Primera parte:
Crear una función con tres parámetros que sean números que se suman entre sí.
Llamar a la función en el main y darle valores.
*/

function suma(p1,p2,p3){
    console.log(p1+p2+p3);
}

const main = function(){
return suma(1,4,3);
}
main()

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

let miCoche = new Coche(1);

miCoche.incrementar()//'Este coche esta aumenta sus puertas a 4'
miCoche.incrementar()//'Este coche esta aumenta sus puertas a 5'
miCoche.incrementar()//'Este coche esta aumenta sus puertas a 6'
miCoche.incrementar()//'Este coche esta aumenta sus puertas a 7'