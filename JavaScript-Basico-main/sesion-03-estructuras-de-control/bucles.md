## Bucles

Son aquellos que nos permiten repetir una fraccion de nuestro codigo un numero determinado de veces en funcion de una condicion. En la mayoria debemos tener inicializacion, condicion y actualizacion.

### for 

Son los bucles que mas se utilizan en la mayoria de lenguajes. Se declaran asi.

    for(inicializacion; condicion; actualizacion){
        //esto se ejecutara hasta que se cumpla la condicion.
    }

ejemplo

    for (let i = 0; i < 10; i++) {
        // Esto es el bucle
        console.log(i)
    }

Tenemos diferentes formas de representar adicion por 1.

    // i = i + 1
    // i += 1
    // i++

Podemos recorrer en pares dependiendo de la actualizacion. 

    for (let i = 0; i < 10; i += 2) {
        // Esto es el bucle
        console.log(i)
    }   

### for para recorrer listas

Tenemos la opcion de recorrer listas o arrays para hacer determinada accion. 

    let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i] * 2)
    }

Con length obtenemos la longitud de los valores dentro del array o lista. 

Para acceder al indice.

    console.log(i)

Para acceder a los valores.

    console.log(lista[i])

### for of

Con el for of podemos accedemos al valor de la lista sin usa el .length para poder ser mas especificos. 

    // Estructura for...of
    for (let valor of lista) {
        console.log(valor)
    }

### Foreach

Funciona unicamente como metodo de arreglos para poder cumplir una seccion de codigo. Por cada uno de los valores de la lista.

    // Estructura forEach
    lista.forEach(valor => {
        console.log(valor)
    })

Aqui usamos una funcion flecha o arrow function.

## Para recorrer objetos.

Lo podemos usar de la misma forma que con for of aunque en este ejemplo querremos acceder al indice de estos, recordemos que ppara acceder al valor en for in con un objeto lo hariamos de la siguiente manera. 

    // Estructura for...in
    let persona = {
        nombre: "Gorka",
        apellido: "Villar",
        edad: 34,
        isDeveloper: true
    }
    console.log(persona.nombre)

    let prop = "edad";
    console.log(persona[prop])

    for (let propiedad in persona) {
        console.log(propiedad);
        console.log(persona[propiedad])
    }

### while

Es un bucle que se ejecuta cada vez que una condicion se cumpla, se suele utilizar bastante. 

Por lo general creamos una variable que este por fuera a la cual el bucle pueda ir accediendo y dentro del bucle tendremos la actualizacion. 

    // Bucles While

    let i = 0;

    while (i == 10) {
        console.log(i);
        i++;
    }

Con estos bucles por lo general debemos tener cuidado, ya que podemos crear bucles infinitos y gastar memoria. 

### Do while

A diferencia del bucle while, con DoWhile siempre se ejecutara una vez por lo menos. 

    i = 15;
    // Do...while
    do {
      i++
      console.log("Estoy en el do while")
    } while (i > 16)

