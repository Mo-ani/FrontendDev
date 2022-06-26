/*

Crear clase Persona.
Crear variables las privadas edad, nombre y telefono de la clase Persona.
Crear gets y sets de cada propiedad.
Crear un objeto persona en el main.
Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.

*/

class Persona{
    constructor(){
      let edad;
      let nombre;
      let telefono;
    }
    setNombre(nombre){
      this.nombre = nombre;
    }
    setEdad(edad){
      this.edad = edad;
    }
    setTelefono(telefono){
      this.telefono = telefono;
    }
    getNombre(){
      return this.nombre;
    }
    getEdad(){
      return this.edad;
    }
    getTelefono(){
      return this.telefono;
    }
  }
  
  const luis = new Persona();
  
  // creamos el objeto
  luis.setNombre('Luis')
  luis.setEdad(24)
  luis.setTelefono('3152946565')
  
  //obtenemos datos del mismo
  console.log(luis)
  console.log(luis.getNombre())// Luis
  console.log(luis.getEdad())// 24
  console.log(luis.getTelefono()) // '3152946565'