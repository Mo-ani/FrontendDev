## Metodos mas comunes de los strings

Son atributos que nos permiten hacer acciones con los string.

### Obtener la longitud de un string

Para esto utilizamos .length.

    let str = "Hola soy un string";
    console.log(str.length);

### Obtener partes de cadenas de caracteres.

Obtener fracciones de un string. Esto si son metodos ya que usamos parentesis.

    // slice() substring() substr()
    let slice_str = str.slice(5, 10)
    console.log(slice_str)

+ Para el atributo slice, damos como argumento de que caracter a que caracter queremos que nos de el string. 

    let substring_str = str.substring(5, 10)
    console.log(substring_str)

+ Igual a slice.

    let substr_str = str.substr(5, 10)
    console.log(substr_str)

+ Substr se encuentra obsoleto, ya actualmente no se usa. 

### Remplazar parte del contenido de un string.

    let cadena = "Hola mi nombre es Gorka"
    console.log(cadena)

    // Al utilizar strings sólo reemplaza la primera instancia
    console.log(cadena.replace('Gorka', 'Miguel'))

Con replace colocamos como argumento primero la parte que queremos remplazar y por una coma por cual queremos replazarlo. 

Por defecto el metodo replace solo actua sobre la primera instancia o lo primero que encuentra en el string, si las queremos cambiar todas. Seria bueno aprender expresiones regulares. 


    let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

    // Al utilizar strings sólo reemplaza la primera instancia
    console.log(texto_largo.replace('los', 'cinco'))

    // Al utilizar la expresión regular /g (global), reemplaza todas las instancias
    console.log(texto_largo.replace(/los/g, 'cinco'))

De esta forma podremos remplazar cadenas de texto por otras que nosotros deseemos y hacerlo que especificidad sin limites. 



## Metodos mas comunes de los strings parte 2

### Manipulación de cadenas de texto MAYUSCULA y minuscula

+ Para manipular mayusculas y minusculas en nuestro codigo, usamos mucho lowercase y uppercase.

Usaremos bastante esto para identificar si un usuario esta introduciendo mayusculas o minusculas comparandolas.

    // Métodos de cadenas de texto (parte 2)
    let input = "ESCORpio"
    let db = "escorpio"
    
    // toLowerCase() - toUpperCase()
    console.log(input.toLowerCase())
    console.log(input.toUpperCase())
    console.log(input.toLowerCase() === db.toLowerCase())
    console.log(input.toUpperCase() === db.toUpperCase())

Hay casos muy especificos con lenguaje o idioma turco se usa otro tipo de metodo, investigar si llega a ocurrir.

### Unir dos cadenas

+ Tenemos la opcion de poder unir o concatenar varias cadenas diferentes usando concat.

    // Formas de concatenar dos cadenas de caracteres
    let str_1 = "Hola soy la primera cadena."
    let str_2 = "Y yo soy la segunda cadena."

    console.log(str_1.concat(" ", str_2))

Tambien podemos hacerlo con el mas o operador +, tenemos que tener mucho cuidado ya que si sumamos un numero puede sumar los numero o concatenarlos. Este no es buena practica.

    console.log(str_1 + " " + str_2)

Una opcion en ES6 muy novedosa es poder concatenar con template strings 
    console.log(`${str_1} ${str_2}`)

### Eliminar espacios al inicio y al final de un string

Este lo usaremos mucho cuando se ingrese en un input espacios al principio o al final ya que son caracteres vacios con TRIM()

Para ambos:

    // Eliminar espacios al inicio y al final
    let str_3 = "    Hola soy un string con espacios al final.   "
    console.log(str_3.length)
    // trim()
    console.log(str_3.trim().length)

Para el principio:

    console.log(str_3.trimStart().length);

Para el final:

    console.log(str_3.trimEnd().length);

### Obtener un caracter o letra por un indice

Esto lo podemos hacer dependiendo el indice que le pasemos.
De esta forma podemos tratarlas como listas o arrays de caracteres.

    let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

    console.log(str_4.charAt(5)) // s
    console.log(str_4[5]) // s

### obtener el indice de un caracter 

Para esto utilizamos el indexof() dentro de los parentesiss pasamos la palabra que queramos buscar. Nos va a dar el indice del primer caracter de la palabra, si no encuentra la palabra nos dara -1

    let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
    console.log(str_5.indexOf("Gorka"))

+ Si queremos aceder ultimo indice de nuestra palabra podemos usar lasIndexOf() 

    console.log(str_5.lastIndexOf("Gorka"));

## Metodos mas comunes de los strings parte 3

### Expresiones regulares y metodos de busqueda de cadenas

Si queremos profundizar con expresiones regulares podemos acceder a este (link)[https://regexr.com]

En este ejercicio usaremos expresiones regulares para hacer determiandos metodos que piden expresiones regulares.

+ Match: nos devolvera en forma de lista todas las instancias de la palabra que se le pase o cuantas veces encotramos esa palabra. 

    let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

    console.log(texto_largo.match(/no/g)) // ['no','no','no',[no]]

+ Para saber cuantas veces se repite un palabra.

    console.log(texto_largo.match(/no/g).length)

### Si una palabra esta dentro de un string.

En este caso usamos includes(), dentro de los parentesis pasamos la palabra que queremos saber si esta, nos devolvera un true si la encuentra y un false si no la encuentra. 

    
    let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

    console.log(texto_largo.includes("terremoto"));

### Si un texto empieza o termina con una palabra dada.

Para esto usamos startWith(palabra) nos dara true o false, dependiendo de si inicia o no con esa palabra el string.

    
    let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

    console.log(texto_largo.startsWith("Tito no es un mono"))// true

+ Para saber si un texto termina con una palabra dada. Lo hacemos asi. 

    console.log(texto_largo.endsWith("árboles."));















