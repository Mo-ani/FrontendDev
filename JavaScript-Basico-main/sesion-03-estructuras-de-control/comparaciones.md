## Comparaciones en JS

Se hace para poder comparar un valor con otro dependiendo de lo que necesitemos.

Como resultado siempre tendremos un true y un false ante estas operaciones.

### Igualdad 

Funciona para notar igualdad entre dos valores. Se expresa con == (Igualdad debil), === (Igualdad fuerte). La difencia es que la igualdad fuerte tiene en cuenta tipo de dato y todo referente a ello. 

    // Igualdad
    if (5 == 5) {
        console.log("5 es igual a 5")
    }

    if (5 === 5) {
        console.log("5 es muy igual a 5")
    }

    let a = 5;
    console.log(typeof a)
    let b = "5";
    console.log(typeof b)

    // == sólo compara el valor
    // === compara el valor y el tipo

### Desigualdad

Funciona para ver si dos numeros son desiguales, funciona debil y fuerte igual que la igualdad. Simplemente si es diferente. 

    let c = 4;
    let d = "4";

    if (c != d) {
        console.log("c es diferente a d - Débil")
    }

    if (c !== d) {
        console.log("c es diferente a d - Fuerte")
    }

    // != sólo compara el valor
    // !== compara el valor y el tipo

### Mayores y menores

Funcionan para determinar si uno es mayor que otro o si uno es menor que otro o tambien mayor o igual que o menor o igual que.

    // Comparaciones mayor que y menor que
    let max = 10;
    let min = 5;

    if (max > min) {
        console.log("max es mayor que min")
    }
    if (max >= 10) {
        console.log("max es mayor o igual que min")
    }

    if (min < max) {
        console.log("min es menor que max")
    }
    if (min <= max) {
        console.log("min es menor o igual que max")
    }

    // >= Mayor o igual 
    // <= Menor o igual