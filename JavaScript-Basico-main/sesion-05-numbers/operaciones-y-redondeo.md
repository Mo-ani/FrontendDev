## Operaciones y redondeo

### Principales operaciones arigmeticas.

Las operaciones basicas que encontramos. 

    // Principales operaciones aritméticas
    let a = 3.5;
    let b = 4.8;

    // Suma (+)
    console.log(a + b);
    // Resta (-)
    console.log(a - b);
    // Multiplicación (*)
    console.log(a * b);
    // División (/)
    console.log(a / b);    

### Convertir numero en cadenas de texto.

Con esto lo que decimos es para poder agregarle comillas a un numero y pasarlo a string. En algunas ocasiones necesitaremos para poder concatenarlo a un string po ejemplo. Para esto usamos toString().

    // Representación de los números en cadenas de texto
    let a_s = a.toString();

### Redondear numero decimales.

Tenemos una opcion muy especifica para poder organizar o redondear a cuantos numeros despues de la coma con toFixed(), dentro de los parentesis le decimos que redondee a n cantidad de numeros despues de la coma.

    let c = 3.3;
    let d = c * 3;

    console.log(d.toFixed(4)); // '9.9000'

Tenemos que tener en cuenta que este metodo, nos devuelve un tipo de dato string, si necesitamos el numero. Solo debemos convertirlo.

    let e = 1839.1232456789;
    let f = 2213556153215;

    console.log(e.toFixed(2)); //'1839.12'
    console.log(f.toFixed(2)); // '2213556153215.00'

Inclusive si el numero original no tiene decimales. 

### Limitar el numero de cifras significativas.

Para esto usamos toPrecision(), lo que hace es darme las cifras signficativas, redondeando despues de la coma. 

    let e = 1839.1232456789;
    let f = 2213556153215;

    console.log(e.toPrecision(7)); // '1839.123'
    console.log(f.toPrecision(7)); // '2.213556e+12'

    console.log(typeof f.toPrecision(3)); // String

Este metodo tambien nos devuelve, un String por ende si de igual forma necesitamos el numero, debemos convertirlo a Number().
