# Lenguajes compilados e interpretados

---

Con esto podremos saber como funcionan nuestro lenguaje por detras

## Compilador

Un compilador convierte  un flujo de caracteres en salidas diferentes, puede ser a codigo maquina o otro lenguaje.

    CODIGO FUENTE --> [AQUI TRABAJA EL COMPILADOR] --> CONVIERTE A CODIGO FINAL

### Analizador lexico

Lee el codigo fuente, caracter por caracter y los va reconociendo uno por uno, luego con las palabras clave y al final es el trabajo de un analizador lexico, reconocer los caracteres y saber que es que.

### Analisis sintactico

En esta fase se lee el reconocimiento del analizador lexico y luego confirma linea por linea que dependiendo del lenguaje estemos haciendo las cosas correctamente.

    luis = 'luis'
    //En JAVA esto seria incorrecto ya que el compilador va a detectar que falta la palabra clave var y genera un error

En pocas palabras se encarga de analizar que la sintaxis del lenguaje sea correcto.

### Generacion de codigo intermedio

Transformacion de codigo lenguaje humano a codigo intermedio, el codigo intermedio es el que puede entender el compilador.

### Optimización de Código

Mejoras a la representación intermedia que resulten en un código más rápido de ejecutar. Como eliminar funciones o objetos que no se utilizaran o nunca se van a usar en el lenguaje. 

### Generacion de codigo

Se genera a codigo maquina o codigo del interprete, por ultimo. 

> cada compilador funciona de forma diferentes para cada uno de los lenguajes, por lexico por ejemplo las palabras reservadas en algunos lenguajes no seran lo mismo que en otros.

## Interpretados

No son ejecutados por el procesador, se ejecuta atraves de una maquina virtual o interprete. En Javascript es JavaScript engine el que se encarga de leer el codigo compilado.

    compilado --> Javascript Engine --> Interpretado


## Diferencias

Un intérprete traduce instrucciones de alto nivel en una forma intermedia para ser ejecutado. En contraste, un compilador, traduce instrucciones de alto nivel directamente en lenguaje de máquina.

El intérprete traduce un programa línea a línea mientras que el compilador traduce el programa entero y luego lo ejecuta.

El intérprete detecta si el programa tiene errores y permite su depuración durante el proceso de ejecución, mientras que el compilador espera hasta terminar la compilación de todo el programa para generar un informe de errores.

Un programa compilado es más seguro que uno interpretado, porque no contiene el código fuente, que puede ser modificado incorrectamente por el usuario

Un leguaje compilado se ejecuta en el procesador y el interpretado necesida de un programa adicional denominado interprete, por eso los lenguajes compilados son mas rapidos y el interpretado es mas sencillo de depurar. 

Un programa interpretado es mas portable y se puede reproducir en cualquier sistema operativo, con el compilador por cada sistema operativo. 

JavaScript es un lenguaje interpretado para navegadores. 


## Lenguajes de bajo nivel

Los lenguajes de bajo nivel son aquellos que se encuentran mas cercanos a el lenguaje maquina.

## Lenguaje de alto nivel

Los lenguajes de alto nivel, son aquello que se acercan mas a la expresion humana o lenguaje humano y es facil de entender para el programador. 

