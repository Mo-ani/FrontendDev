# For

+ [Usos](#usos)

---
PARA O FOR suele dividirse en tres partes: una inicializacion, comparacion y luego un accion.
Nos sirve de igual forma para iterar.

    PARA(inicializacion;comparacion;accion)

    PARA(contador = 10;contador mayor que 0;contador menos 1)
        imprime el valor de contador

En javascript  lo representariamos asi:

    for(let i = 10;i>0;i--){
      console.log(`El contador es ${i}`)
    }

> En un FOR lo ultimo que se ejecuta es la accion, inclusive despues de que se ejecuto nuestro codigo.
---
## Usos 

El bucle for se usa frecuentmente en la programacion, suele ir de la mano con los datos complejos, ya que cuando queramos recorrer estos datos los iteramos con este.

  	    let arr = [10,23,33,44,56]

        para(posicion_array = 0;posicion_array sea menor longitud_array;posicion + 1){
            imprime la posicion del array
        }

En javascript lo representamos:

        let arr = [10,23,33,44,56]

        for(let i = 0;i < arr.length;i++){
            console.log(arr[i] + ' es la posicion ' + i + ' en el array');
        }

        //por detras el comparador lo que hace es
        //0 < 5 --> esta es la medida del arreglo (arr)
        //1 < 5
        //2 < 5
        //3 < 5
        //4 < 5
        //5 < 5 // aqui se detiene la iteracion

> Es una convencion entre los programadores cuando se recorre un arreglo que la i sea la representacion de la posicion del elemento en el array.

Los bucles infinitos son aquellos que por un error en la comparacion iteran infinitamente. 