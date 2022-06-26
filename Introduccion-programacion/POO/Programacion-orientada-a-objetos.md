# Introducción a la Programación Orientada a Objetos

En el mundo de la programacion todo es objetos y clases.

+ [Que-es](#que-es)
+ [Clase-javascript](#clase-en-javascript)
+ [Caracteristicas](#caracteristicas)
+ [Invocacion](#invocacion)
+ [Constructor](#constructor)

---

### Que es?

Un objeto representa en ente del mundo real con sus respectivas propiedades que lo caracterizan y metodos que modifican las propiedades del mismo.

   const coche = {
        marca:"audi",
        tamano:2,
        puertas: function(){
            this.tamano = 4
        }
    }

    coche.puertas() // nos dara como resultado un tamano de 4 puertas

### Clase en Javascript

Cuando nuestro codigo ya es muy grande, las funciones solamente no nos van a servir para organizar nuestro codigo, llegan en ECMASCRIPT 2015. Funciona como sistema basado en prototipos, que funciona para que los programadores les sea mas comodo trabajar. 

La clase es una forma de agrupar o organizar nuestro codigo donde lo podemos entender como padre e hijo (Herencia), donde el padre es aquel que abarca todas las caracteristicas de una organizacion general como animal y dentro tendra objetos especificos de esta clase animal, como pato o perro.

> Por convencion las clases siempre empiezan con mayusculas

### Caracteristicas

+ Las propiedades son variables que existen dentro de la clase.
+ Los metodos son funciones que existen dentro de la clase y modofican propiedades de la misma. 
+ el constructor es aquel metodo que se ejecuta cuando se crea una instancia. 

al usar esa clase en una *Variable* esta dispondra de los metodos de la misma. Al crear difernetes variables estas seran independientes entre si. 

      class Animal{
      	constructor(tamano,age){
            this.tamano= tamano;
          	this.age=age;
        	}
            hablar(){
                return 'cuak';
            }
        }

    const pato = new Animal(2,2)

    pato // es un objeto de la clase animal

    pato.hablar() // accede a la funcion que modifica o retorna un valor. 'cuak'

### Invocacion

con esta clase ya podremos crear objetos animales, que me digan el tamaño y la edad. Para eso recordamos que tenemos que inicializarla con un new Clase() 

Ya teniendo esto puedo invocar a sus funciones o metodos.

Un ejemplo mas practico. 

    class Coche{
      constructor(kil,marca,freno){
        this.kil = kil;
        this.marca = marca;
        this.freno = freno;
      }
      acelerar(){
        this.kil += 1
      }
      frenar(){
        this.freno = true
      }
    }

    const audi = new Coche(0,'audi',false)

    audi
    audi.acelerar()
    audi.acelerar()
    audi.acelerar()
    audi.acelerar()
    audi.acelerar()
    audi.acelerar()
    audi // kil : 6
    audi.frenar()
    aaudi // freno : true

### Constructor

El constructor es una forma de inicializar las propiedades del objeto cuando invoquemos la clase.

Puede tener parametros que podrian verse como las caracteristicas del objeto que estamos creando. 

la sobrecarga son dos constructores en la misma clase pero con parametros diferentes. Esto se hace para tener mas o menos parametros en una invocacion, que sera la unica diferencia.

Con Javascript los hacemos mas dinamico con el this. Ya que con este podremos usar las variables con su mismo nombre y asignarle el valor del parametro con el mismo nombre. 




