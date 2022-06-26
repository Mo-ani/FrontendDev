# Gestion de errores

+ [Variables](#como-llamar-una-variable)
+ [Comentarios](#comentarios)
---

# Primeros errores

### Como llamar una variable

Si voy a utilizar una variable debo colocar un nombre adecuado dependiendo el uso de la variable.

    var contador = 0 // funciona para contador

Esto se hace para dar una mejor lectura del codigo, es buena practica de la industria.

> La convencion nos dice que es valido en bucles 'i','k','j' (index) cuando necesitamos recorrer arrays bidimensionales o tridimensionales. Por eso se usa i primer for, k del for indentado,j del ultimo for indentado

    const arrBi = [[1,2],[1,3]]
    
    for(let i = 0;i < arrBi.length; i++){
      for(let j = 0;j < arrBi[i].length; j++){
        console.log(arrBi[i][j]) //accedemos a 
    	}
    }   

### Comentarios

No colocar comentarios evidentes ya que desperdiciamos tiempo cuando se lee en el codigo. 

Es buena practica hacer comentario para nuestro yo del futuro, para que mas adelante podamos saber el porque escribi esa linea de codigo. 

    let temperatura = 15
    // comprueba la temperatura
    if(temperatura == 15){
        console.log('true')
    }