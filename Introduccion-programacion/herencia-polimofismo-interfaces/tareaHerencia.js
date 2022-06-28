/*
Crea una clase Persona con las siguientes variables:

La edad
El nombre
El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
*/

class Persona{
    constructor(edad,nombre,telefono){
      this.edad = edad;
      this.nombre = nombre;
      this.telefono = telefono;
    }
    aboutPerson(){
      return `Hello my name is ${this.nombre} im  ${this.edad} and my credit is ${this.credito}`
    }
    
    aboutTrabajador(){
       return `Hello my name is ${this.nombre} im  ${this.edad} and my salary is ${this.salario}`
    }
  }
  
  class Cliente extends Persona{
    
    constructor(edad,nombre,telefono,credito){
      super(edad,nombre,telefono) // Con super llamamos el constructor de Persona y le indicamos que parametros va a heredar 
      this.credito = credito
    }
      tarea() {
      console.log("Tarea del hijo...");
    }
  }
  
      let Luis = new Cliente(15,'Luis',315266544,true)
      Luis // objeto
      Luis.aboutPerson() // metodo de la clase padre
      
      class Trabajador extends Persona{
      constructor(nombre,edad,telefono,salario){
        super(edad,nombre,telefono)
        this.salario = salario
      }
    }
  
      let Antonio = new Trabajador('Antonio',15,3152913405,'500 euros')
    
    Antonio // objeto trabajador
    Antonio.aboutTrabajador() // Metodo del padre para trabajador