# Funciones
---
Se encuentran en todos los programas, lo que realmente tenemos que conocer es cuando crear una funcion. 

Una funcion nos evita tener que repetir codigo. Quiere decir que nos ayuda a optimizar tareas repetitivas.

Tienen una prototipo o signature, que se refiere a:

+ como se llama la funcion
+ que datos recibe o parametros que acepta una función 
+ que tira como output

los argumentos o parametros que recibe la funcion automaticamente el interprete o compilador los convierte en variables que solo existen dentro de la funcion.

Estas se invocan teniendo en cuenta el prototipo (dependiendo de lo que nos pida)

**Ejemplo javascript**

    function sumar(num1 , num2){
        return num1 + num2;  //cuando queremos acceder al valor de retorno de la funcion usamos un return.
    }

    sumar(1,2) //Aqui la estoy invocando

en Java hay funciones que no devuelven nada y otras que si devuelve, si utilizo una funcion que no devuelve nada quiere decir que mas adelante voy a hacer algo con esta funcion. 

