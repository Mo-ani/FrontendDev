# Privacidad, abstraccion y encapsulacion

---

Estos conceptos se ligan a la programacion orientada a objetos. 

Las clases tienen propiedades publicas y propiedades privadas:

Cuando podemos acceder desde fuera de la clase a sus propiedades y metodos es una propiedad PUBLICA y cuando solo podemos acceder desde dentro de la clase es PRIVADA

### Privacidad

Consiste en tener propiedades privadas dentro de una clase, a las que podremos modificar o obtener el valor (Get y Set) y no podremos ver su valor interno. 


# Encapsulacion

Consiste en jugar con las variables privadas para que desde dentro de la clase los manipule o modifique y desde afuera se pueda utilizar.

    clase MiClase
        privada propiedad1
        privada propiedad2

    // para poder obtener y acceder a las propiedades de esta clase, se utilizan los getters y setters 

        funcion setPropiedad(valor)  // lo usamos para modificar las propiedades
            esta.clase.propiedad1 = valor 
        funcion getPropiedad() //obtener valores de las propiedades
            devuelve el valor de esta clase

Se llama encapsulacion porque encapsulamos las propiedades dentro de una clase y las modificamos mediante funciones que pueden ser set o get para modificar y acceder a valores de unas propiedades privadas del objeto. Con el fin de ocultar informacion importante de los objetos. 


[Aqui](https://www.freecodecamp.org/news/here-are-some-practical-javascript-objects-that-have-encapsulation-fc4c1a79c655/#:~:text=Encapsulation%20means%20information%20hiding.,a%20function%20with%20private%20state.) podemos profundizar sobre esto en Javascript

[Aqui](https://www.javatpoint.com/javascript-oops-encapsulation) encontramos un ejemplo completo de encapsulacion en Javascript.

[MasInfo](https://www.educba.com/encapsulation-in-javascript/), si queremos ir al detalle.

### hilos

Un hilo, aquel programa o aplicacion que hace una cosa a la vez, par dar continuidad a la otra

Y multihilo, que podra ejecutar varios procesos al mismo tiempo. \


### Abstracción

Una clase abstracta es similar a una clase comun y corriente, pero en los metodos abstractos, puede decirnos que la tenga que implementar una clase hija. 

Claramente si tenemos una clase auto, con un metodo sonido que hace que suene, el sonido de un carro no sera igual que el sonido de una moto. Con este ejemplo ilustrado, vemos que el metodo abstracto se adapta a determinardas clases dependiendo de la propiedad

Ejemplo pseudocodigo 

    clase abstracta vehiculo
        privada tipo;
        privada sonido;

    funcion settertipo(valor)
        esta_clase.tipo = valor
    
    funcion abstract gettersonido()
        devuelve 'algo'  // esto es una clase abstracta

Vamos a tener un metodo normal y otro abstracto con el fin de usarlo en diferentes escenarios. 

Tendremos funciones ya implementadas y con el abstract vamos a tener una parte de el metodo implementado y con el metodo abstracto vamos tener un prototipo. 
    