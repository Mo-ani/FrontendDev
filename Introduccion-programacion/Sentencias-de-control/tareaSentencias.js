
/*Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.*/
let numIf = 4
numIf > 0 ? console.log(`${numIf} es positivo.`) : console.log(`${numIf} es negativo.`)

/*Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.*/

let numWhile = 0
while(numWhile < 3){
  numWhile++ 
  console.log(numWhile)
}
/*Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.*/

let numDo = 3
do{
  numDo++ 
  console.log(numDo)
}while(numDo < 3)
  
/*Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.*/
  
	for(let numFor = 0;numFor <= 3;numFor++){
    console.log(numFor);
  }

/*Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.*/

const estacion = 'Primavera'
switch(estacion){
  case 'Primavera':
    console.log('Es primavera!')
    break;
  case 'Invierno':
    console.log('Es invierno')
    break;
  case 'Verano':
    console.log('Es verano')
    break;
  case 'Otoño':
    console.log('Es otoño')
    break;
  default:
    console.log('Ingresa una estación del año')
}