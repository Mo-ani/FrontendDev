# Funciones avanzadas
---

Existen dos formas de pasar parametros a las funciones.

**Paso por valor**, que sencillamente se pasa un dato primitivo directamente desde la funcion. 

Generalmente datos primitivos donde el valor seria la referencia en si y se afecta una coppia.

    function suma(param1,param2)){
        return param1 + param2;
    }

    suma(1,2)

> tener en cuenta que por numero gastamos 4 bytes en memoria, qwuiere decir que no podemos estar gastando memoria pasando argumentos.

**Paso por referencia**, le paso una referencia de memoria por parametro y la funcion modifica lo que hay en esa referencia de memoria, no crea un nuevo espacio. 

Generalmente cuando son datos complejos no primitivos como (Objecto, arrays o funciones), quiere decir que no se modifica el valor en si, si no una referencia que nos permite acceder a ese valor. 

    const a = [1, 2, 3];
    const b = a;
    a.push(4);
    console.log(a); // [ 1, 2, 3, 4 ]
    console.log(b); // [ 1, 2, 3, 4 ]
    
    const foo = (arr) => {
      const results = [];
      while (arr.length) {
        results.push(doSomethingWithArrayItem(arr.shift()));
      }
      return results;
    };
    const arr = [1, 2, 3, 4];
    foo(arr);
    console.log(arr); // []


Si se quiere profundizar mas sobre funciones avanzadas este [enlace](https://medium.com/laboratoria-developers/por-valor-vs-por-referencia-en-javascript-de3daf53a8b9) tiene todo mas detallado. 

---
## Funcion recursiva.

Es una funcion que devuelve un valor y se invoca a si misma.

Hay que tener cuidado con las iteraciones infiinitas. 

    function recursive(i) {
        if (i == 1) { // la condicion para que no sea infinita. 
            return 1;
        }
        return i + recursive(i - 1);
    }

    recursive(5)

## Call back

Es asignar el nombre de una funcion a una variable. 

En javascript se usa para pasarse como argumento de otra funcion y se invoca dentro de otra funcion externa para hacer alguna accion, comparten ambitos incluyendo variables. 

    const nombreFuncion = function(name) {
      console.log('Hello ' + name);
    }

    function processUserInput(callback) {
      var name = 'Luis';
      return callback(name);
    }
    
    processUserInput(nombreFuncion);    

