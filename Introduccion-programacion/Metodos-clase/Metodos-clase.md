# Metodos de clase

+ [Valor-referencia](#por-valor-o-por-referencia)
+ [Recursividad](#recursividad)

---

    CLASE A
        PROPIEDAD1
        PROPIEDAD
        
        METODOS

Son las funciones que encontramos dentro de las clase. En ellos encontramos algo que se denomina signature o firma, que consiste en como declaramos o creamos la funcion. Que parametros estoy pidiendo, cual es el nombre del metodo y que valor me va a entregar

    METODO
        NOMBREMETODO (PARAMETROS) (VALOR)

En javascript lo podemos representar asi.

    class Cliente{
      constructor(nombre){
        this.nombre = nombre
      }
      saludo(){
        return `My name is ${this.nombre}` // estos son los metodos.
      }
    }

    let Luis = new Cliente('Luis')
    
    Luis.saludo() // My name is Luis.

Las interfaces son reglas que le damos a otros programadores para indicarle que deben cumplir con algo. 

En JAVA al crear una clase se puede implementar una interface de metodos que son la guia que el entragamos a otro programador, que si usa es clase estara por ende usando sus metodos. 

Lo unico que nosotros tenemos que programar es como queremos implementar la interface de metodos.

    INTERFAZ
        GETUSUARIOS()

    CLASE USUARIO IMPLEMENTA INTERFAZ USUARIOS
        METODO GETUSUARIOS()
            OBTENER LOS USUARIOS DE UNA BSE DE DATOS // AQUI YO PROGRAMO QUE HACE EL METODO DE LA INTERFAZ

    FUNCION LISTARUSUARIOS (INTERFAZ DE USUARIOS)
        DE LA INTERFAZ EJECUTA EL METODO GET USUARIOS
    
    INVOCO A FUNCION LISTARUSUARIO(TEDOYUNOBJETOUSUARIO)

### Por valor o por referencia

Cuando a una funcion pasamos un valor y afectamos directamente el valor original que esta guardado en memoria, creamos una referencia o copia de ese valor y solo afectamos la referencia del mismo.

Habran muchas ocasiones donde no podemos modificar los valores y necesitaremos modificar la referencia de dicho valor.

De esta forma las variables solo se ejecutaran en el ambito de la funcion.


Asignando valores primitivos.

    let a = 1
    let b = a

    b = 5 

De esta forma podemos observar como cada variable afecta su valor y se mantienen independientes. Ya que hace una copia del valor.

Asignando valores complejos

    const a = [1,2,3]
    const b = a

    a.push(4)

    console.log(a); // [ 1, 2, 3, 4 ]
    console.log(b); // [ 1, 2, 3, 4 ]

Como podemos ver a arriba no se asigna el valor si no una referencia al mismo, por eso al modificar un valor se modifican ambas variables.

    const foo = (arr) => {
      const copy = arr.slice(0); // hacemos una copia del arreglo
      const results = [];
      while (copy.length) {
        results.push(doSomethingWithArrayItem(copy.shift()));
      }
      return results;
    };
    const arr = [1, 2, 3, 4];
    foo(arr);
    console.log(arr); // [1, 2, 3, 4]   

En es forma podemos aprender a pasar copias con valores complejos, al hacer una copia del mismo elemento.

[Aqui](https://medium.com/laboratoria-developers/por-valor-vs-por-referencia-en-javascript-de3daf53a8b9) encontramos informacion mas detallada de valor y referencia en Javascript

Podemos llegar a la conclusion de que todo dato complejo que se pasa, se esta pasando por referencia (arr,obj,func) quiere decir que vamos a modificar la memoria original de memoria, en cambio por datos primitivos, hace una copia al valor original y no lo modifica. 

## Recursividad

La recusividad consiste en que un metodo o funcion se va a llamar a si mismA una y otra vez, para iterar.

Siempre debemos tener una condicional, que se denomina el caso base que nos indique cuando debemos parar la recursividad.

    FUNCION SUMA(A,B)
        TEMP = A + B

        SI TEMP NO ES MAYOR A 15
            SUMA(A,TEMP)

Un ejemplo clasico es el factorial o cuenta regresiva.

    function factorial(num){
      let resultado = 0
      if(num === 1){
        return 1
      }
      resultado = factorial(num - 1) * num
      return resultado
    }

    factorial(3)

Ejemplo de la recursividad en cuentaRegresiva de

    function regresivaDesde(num){
      if(num === 0){
        return;
      }
      console.log(num)
      regresivaDesde(num - 1)
    }
    regresivaDesde(10)

no solo lo podemos hacer para disminuir o ir hacia atras

    function aumentoDesde(num){
          if(num === 100){
            return;
          }
          console.log(num)
          regresivaDesde(num + 1)
        }
    
    aumentoDesde(1) // llegara hasta 100

Esto tambien lo podemos entender si analizamos que sucede con nuestro codigo en el debugger, de esta forma anilizamos que sucede linea por linea.

Este [articulo](https://www.freecodecamp.org/espanol/news/como-entender-recursividad-en-javascript/#:~:text=En%20t%C3%A9rminos%20simples%3A%20recursi%C3%B3n%20es,entrada%20m%C3%A1s%20peque%C3%B1a%20cada%20vez.) podemos profundizar sobre la recursividad o recursion en Javascript 