# Herencia, polimorfismo e interfaces.


+ [Herencia](#herencia)
    + [En-clases-abstractas](#heredar-clases-abstractas)
    + [Multinivel](#herencia-multinivel)
    + [Multiple](#herencia-multiple)
    + [Jerarquica](#herencia-jerarquica)
    + [Hibrida](#herencia-hibrida)
+ [Polimorfismo](#polimorfismo)
    + [En-metodos](#polimorfismo-en-metodos)
+ [Interfaces](#interfaces)
---

## Herencia

La herencia consiste en que una clase hereda metodos y propiedades de otra clase.

La clase que toma la herencia la llamamos hija y la clase que hereda la llamamos generalmente clase principal.

    CLASE VEHICULO
        VELOCIDADMAXIMA
        TIPODEGASOLINA
    
        FUNCION diHola()
            imprime 'Hola'

    CLASE COCHE HEREDAVEHICULO;
        HEREDA VELMAXIMA
        HEREDA TIPODEGASOLINA
        NUMERO DE PUERTAS;

        HEREDA FUNCION DIHOLA()
            IMPRIME 'HOLA'

        FUNCION SETTERNUMERODEPUERTAS(puertas)
            ESTA_NUMERO DE PUERTAS = PUERTAS
        
        FUNCION GETTERNUMERODEPUERTAS()
            ESTA_NUMERO DE PUERTAS = PUERTAS

Ejemplo en Javascript

    // clase padre
    class Vehiculo{
      constructor(velMax,matricula){
        this.velMax = velMax
        this.matricula = matricula
      }
    }
    
    let coche = new Vehiculo(15,'143HBG')
    
    //clase hija heredada

    class Coche2 extends Vehiculo{}
    
    coche
    
    let electrico = new Vehiculo(15,'ABG345','hola')
    
    electrico // objeto con propiedades heredadas de Vehiculo

En [este](https://lenguajejs.com/javascript/caracteristicas/herencia-de-clases/) articulo podemos encontrar mas informacion de la herencia en Javascript. 

en Java podemos crear clases de las cuales no podemos volver a heredar. Usando una palabra FINAL

Utilizo clase padre cuando solo necesito metodos y propiedades de esta clase y la clase hija la utilizo para cuando necesite metodos de la clase hija. 

### Heredar clases abstractas.

Un clase abstracta quiere decir que usare metodos parciales, ya que los metodos no tienen cuerpo. 

Cuando la clase es abstracta padre y la utilizo en una hija, en JAVA tengo que programar lo que deben hacer estos metodos abstractos, los invoco pero cuando los invoque en una clase hija, tengo que programarlos. 

### Herencia multinivel

Tambien pueden haber herencias multiples que son herencia de una clase que esta tomando herencia de otra. Como limite siempre se recomienda, heredar hasta un maximo de 3 niveles.


    class Coche3 extends Coche2{}

    Aqui estoy heredando de una clase hija.


### Herencia multiple

Es cuando una clase hija hereda de dos clases padre. 

     CLASE VEHICULO
        VELOCIDADMAXIMA
        TIPODEGASOLINA
    
        FUNCION diHola()
            imprime 'Hola'

    CLASE MOTOR
        TIPO DE MOTOR

    CLASE COCHE HEREDA VEHICULO,MOTOR;
        HEREDA VELMAXIMA
        HEREDA TIPODEGASOLINA
        NUMERO DE PUERTAS;

        HEREDA FUNCION DIHOLA()
            IMPRIME 'HOLA'

        FUNCION SETTERNUMERODEPUERTAS(puertas)
            ESTA_NUMERO DE PUERTAS = PUERTAS
        
        FUNCION GETTERNUMERODEPUERTAS()
            ESTA_NUMERO DE PUERTAS = PUERTAS   

Actualmente en javaScript no es posible heredar multiplemente. 

### Herencia jerarquica 

Podemos pensar en un arbol, que de una clase base tendremos otras clases y luego de cada clase hija se heredan otras nuevas.

    CLASE A
        CLASE B HEREDA DE A
            CLASE UNO HEREDA DE B
            CLASE DOS HEREDA DE B

        CLASE C HEREDA DE A
            CLASE UNO HEREDA DE C
            CLASE DOS HEREDA DE C

### Herencia hibrida

Combina modelos de herencia. 

    CLASE A 
        CLASE B HEREDA DE A
        CLASE C HEREDA DE A

    CLASE D HEREDA DE B Y C

En este [Sitio](https://guru99.es/java-class-inheritance/#4) encontramos un ejemplo en imagenes que es mas claro de entender se usa Java pero se entiende en cualquier lenguaje de programacion. 

---

## Polimorfismo

consiste que las clases hijas implementan la misma funcion del padre pero queremos que haga algo diferente a como se creo originalmente. 

    CLASE VEHICULO
        PRIVADA VELOCIDADMAX

        FUNCION DIHOLA()
            IMPRIME HOLA

    CLASE CLASE VEHICULO HEREDA CLASE COCHE
        HEREDA VEL MAX

        HEREDA DIHOLA() // PERO LA SOBREESCRIBO
            IMPRIME CHAO

Basicamente el polimorfismo en JAVA consiste en sobre escribir funciones de un clase padre en una clase hija. 

### Polimorfismo en metodos

El polimorfismo tambien se puede aplicar a funciones dentro de la clase En donde cambian los parametros y tambien el tipo de dato que nos entregan y se ejecuta cada una dependiendo del tipo de datos que le pase. En JavaScript la cohercion de datos nos ahorra mucho de esto. 

### Interfaces

Similares a las clases abstractas pero no implementan ninguna funcion, pero nos indican que debemos implementar.

    INTERFACE COCHE
        FUNCION ACELERAR(VELOCIDAD)
        FUNCION FRENAR(VELOCIDAD)

Nos dice que cuando un programador implemente la clase, tiene que si o si implementar los metodos dentro de esta clase. 

Es como un prototipo que le estoy pasando a otro programador, pero que debe utilizar si o si las funciones dentro de esa clase. Estas funciones no tienen cuerpo por ende al implementarlas le decimos que queremos hacer con este. 

la clase abstracta nos entrega propiedas y funciones, pero las interfaces solo nos entregan las funciones. 

    

