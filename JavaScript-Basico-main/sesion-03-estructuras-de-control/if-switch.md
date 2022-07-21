## If else and switch o estructuras de control

Una estructura de control, es una metodologia que nos permite dirigir nuestro codigo para guiarlo por donde nos interese dependiendo de ciertas condiciones, normalmente usamos bifurcaciones como if y swtich para hcaerlo. 


### if

Bifurcaciones : estructuras que nos permiten ir por un camino o por otro camino dependiendo de las condiciones que tengamos. 

    Si se cumple esta condicion voy por este camino si no por este otro.

Ejemplo:

    let saldo = 50;
    let efectivo = 100;

    if (efectivo < saldo) {
        console.log("Puedes sacar dinero")
    }

    if (efectivo < saldo) {
        console.log("Puedes sacar dinero")
    } else {
        console.log("Saldo insuficiente")
    }

Si la condicion de los parentesis al lado de if () nos da true o verdadero, se ejecuta el codigo entre las llaves {}, si nos da false le podemos decir que se ejectue lo que esta entre {} del else.

### else if

Podemos ser mucho mas especificos agregandole, notaciones de else if, agregando mas condiciones. 

Ejemplo: 

    // If else + if else

    let nota = 200;

    if (nota === 5) {
        console.log("Enhorabuena, has obtenido un sobresaliente");
    } else if (nota === 4) {
        console.log("Buen trabajo, pero podrías haberlo hecho mejor");
    } else if (nota === 3) {
        console.log("Has obtenido un suficiente");
    } else if (nota === 2) {
        console.log("No has aprobado por poco");
    } else if (nota === 1) {
        console.log("No has estudiado nada, trabaja un poquito más para la próxima");
    }  else {
    console.log("Error, introduce una nota entre el 1 y el 5");
    }

Esto se hace para hacer codigo mantenible y facil de leer, por eso usamos el elseif

### switch

Tambien tenemos una opcion de switch, es similar al else if pero con sentencias. No se usa mucho por lo que consume en memoria.

    // Sentencias Switch
    let nota = 3;

    switch (nota) {
        case 5:
            console.log("Buen trabajo, ¡sobresaliente!");
            break;
        case 4:
            console.log("Buen trabajo, pero podrías haberlo hecho mejor");
            break;
        case 3:
            console.log("Has obtenido un suficiente");
            break;
        case 2:
            console.log("No has aprobado por poco");
            break;
        case 1:
            console.log("No has estudiado nada, trabaja un poquito más para la próxima");
            break;
        default:
            console.log("Error")
            break;
    }

Como vemos usamos brake para decirle a switch que finalice en esa respuesta. Si no lo hacemos ejecutara todos los que tendremos debajo de switch. Tndremos que pasa un caso por defecto, para buenas practicas que seria el default, es como el else en if.

        default:
            console.log("Introduce un numero entre 1 y 5")
            break;

