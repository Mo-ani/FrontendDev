# Errores del programador

---

### Guia de estilo

La guia de estilos depende de la empresa y el programador, es buena practica tener una sola guia de estilo en el codigo, que sea coherente y se vea la indentacion.

        if(foo == 0){
            accion;         // Indentado
        }

        if(foo == 0){accion} // no se entiende

        while(a < 0){
        if(a > 4){accion}  // mala indentacion
        }

En algunas empresas tenemos que adpatarnos a la guia de estilo de la empresa.

### Copia de seguridad

Un buena practica es tener un control de version o copia de seguridad de mi codigo, especialmente cuando se tiene proyectos muy grandes. Para prevenir cualquier problema con el disco. 

En algunas empresas no permiten github o gitlabs

### Eficiencia

Siempre habran diferentes formas de hacer una misma cosa como por ejemplo para recorrer un array con for, cuando puedo usar un for in o for of dependiendo de lo que necesite. La regla dice que si puedo usar un codigo mas simple y mas legible, lo use.

    const array = [1,2,3,4];

    array.forEach(element => console.log(element));

    for(let element in array){
        console.log(element)        // para acceder al indice
    }

    for(let element of array){
        console.log(element)       // para acceder al elemento
    }

### Console.log

Usamos console.log cuando queremos saber que sucede en nuestro programa o encontrar posibles errores, para depurar o debuggear nuestro codigo siempre tendremos una herramienta que nos permite descubrir errores, inclusive nos otorga mas informacion que un console.log. En javascript se llama debugger

+ En este [link](https://www.youtube.com/watch?v=MJZfGhJ_csc&t=512s) encontramos un tutorial para aprender a usarlo. 

### Funciones

La funcion tiene que hacer lo que nos dice el nombre de la misma, no podemos restar en una funcion que dice suma. 

No podemos crear funciones por que si, aunque simplican nuestro codigo pero una funcion muy grande lo que hace es hacer ilegible y mover problemas para ella misma. 

Un buena practica es hacer las funciones pequeñas. 

