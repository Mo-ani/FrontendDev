# Repercusion de errores

+ [Conversion](#conversion-de-tipos)
+ [Posicion](#error-en-posicion)
+ [Overflow](#overflow-o-desbordamiento-numerico)


---

### Conversion de tipos

Consiste en convertir un tipo de dato en otro, en Javascript el interprete se encarga de hacer la cohercion de datos por detras.

Aun asi podemos convertir string en numeros, visceversa, pero con flotantes a enteros es posible pero estaremos perdiendo bastante datos en el camino.
    
    
    let float = 4.500

    int(float) // resultado 4 y perdemos el 500

    let string = '5'
    let num = 3

    console.log(string + num) //8

### Error en posicion

En muchas ocasiones, queremos acceder al ultimo valor de un array, como error comun accedemos a el colocando la ultima posicion del array, esto en Javascript nos va a arrojar undefined debido a que en programacion empezamos a contar desde cero, por ende para acceder al ultimo valor del array usar length - 1.

    const arr = [1,3,5,8,2,4]

    console.log(arr[6]) // undefined

    console.log(arr[arr.length - 1]) // 4

> La mayoria de cosas que hagamos como programadores, vamos a usar mucho los array, ya que son colecciones de datos que nos permiten exponer mejor los datos.

### overflow o desbordamiento numerico

Es pasarnos del valor maximo o numero maximo disponible en el lenguaje. Ya que al guardar un valor en una variable el computador busca formas de guardarlo en memoria.

Conocer esto nos permite saber cual es el limite de desbordamiento de el lenguaje que aprendemos. Cuando nos pasamos de este limite, saldra algun error de desbordamiento. El limite mas alto seria *9,007,199,254,740,992* equivalente a 2 ^ 52, Javascript no nos arroja ningun error de desbordamiento o algo por el estilo. Pero suele comportarse un poco extraño. 

    console.log(Number.MAX_SAFE_INTEGER) // numero maximo
    console.log(Number.MAX_SAFE_INTEGER + 1) //TODO BIEN
    console.log(Number.MAX_SAFE_INTEGER + 2) //CERCA DE LA ZONA DE RIESGO

    // hasta aqui todo se comporta bien, pero veamos el siguiente ejemplo.
    console.log(Math.pow(2, 1023)) // 8.98846567431158e+307
    console.log(Math.pow(2, 1024)) //infinty

Como podemos ver nos da infinity cuando queremos acceder a valores superiores al numero entero mas grande. 

>Entre mas bits podamos usar, más precisos serán nuestros números y cálculos. Los sistemas modernos de 64 bits ofrecen una precisión suficientemente alta para cálculos de bajo riesgo. - https://es.khanacademy.org/

[Aqui](https://es.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:number-limits-overflow-and-roundoff/a/number-limits-overflow-and-roundoff) podemos leer mas sobre los desbordamientos de numero en javascript. 

El consejo de esto es no abusar de la capacidad de memoria, porque nos quedaremos sin esta capacidad. Pensemos en la memoria como una caja, usar el menor de huecos posibles para que mi programa funcione mucho mejor. 
