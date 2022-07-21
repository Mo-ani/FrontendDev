# JavaScript-Basico

## Javascript

Es un lenguaje interpretado, quiere decir que no necesita ser compilado para su ejecucion siendo sicrono con un unico hilo de ejecucion, si con SetTimeOut agregamos una espera de algun tipo de tiempo. El interprete tardara esa cantidad y mientras esto sucede no podra interpretar nada mas.

Se usa para crear aplicaciones web, programas de escritorio, servidores, paginas web etc

Fue pensado originalmente para que el navegador lo interpretara.

[Aqui podremos profundizar mas del tema](https://www.arquitecturajava.com/javascript-sincrono-o-asincrono/)

## Ecma

Contamos con una organizacion, similar a la WORLD WIDE WEB www.3w.org, llamada ecma quienes se encargan del mantenimiento y actualizacion de Javacript, ellos deciden que se actualiza. Actualmente la mas habilitada es ES6 en todos los navegadores. 

## Extensiones 

En vs podemos utilizar varias extensiones para ayudarnos en el desarrollo de Javascript entre las mas destacadas encontramos:

+ prettier, que nos ayudara a que nuestro codigo sea legible en Javascript 

+ Quokka, que nos mostrara en pantalla un salida en consola instantanea, para no tener que cambiar a el navegador o consola. Para poder usarla damos click en f1 colocamos quokka y luego nos dira que lenguaje vamos a usar, en nuestro caso Javascript. Luego solamente lo guardamos con js y queda bien. 

## Node y NPM

Ryan dall, mal escrito creo node.js entorno que nos permite ejecutar javascript, multiplataforma como aplicaciones, programas de escritorio, paginas web, etc. Hasta 2009 era inpensable ejecutar javascript en la terminal, dentro de un sistema operativo. 


## Node package manager (NPM)

Es el que es encarga de gestionar todos los modulos o paquetes que tengan que ver con node.js, ejemplo librerias, aplicaciones, modulos etc.

Leer un mas sobre estos temas.

## Instalacion

Para instalar node.js entramos a la pagina oficial, que seria [esta](https://nodejs.org/).

Para ejecutarlo ingresamos a cmd o simbolo del sistema y damos node -v para verificar que version tenemos.

El npm lo tendremos que isntalar en cada una de las carpetas donde corramos nuestro codigo. 

    npm i -g
    npm install -g
    sudo apt install -g npm


## primer proyecto node

Para iniciar un proyecto en node.js nos vamos a ayudar de npm, para ello vamos en la carpeta donde tendremos nuestro proyecto y abrimos la terminal. 

En ella escribimos nom init y automaticamente nos inicializara el proyecto en node.js, nos hara unas preguntas importantes para crearlo, procedemos a respodnerlas, luego nos creara un archivo JSON. 

Muy importante nos preguntara que archivo main o index.js conectaremos con el archivo JSON. 

Si queremos ejecutar un archivo en node desde la terminal, podremos acceder a ello colocando node y luego el nombre del archivo que queremos ejecutar. 

## Ejecución y comentarios

Los script son guiones o codigo que se ejecuta una vez, lo podramos llamar desde la terminal.

Lo podremos hacer colocando npm run test, asi correremos algun test o algun script que necesitemos correr. 

El script lo podremos crear directamente desde scripts en nuestro archivo JSON colocamos start como key y el archivo.js como value. 'start' : index.js; 

### Comentarios

En javascript podremos comentar con // una sola linea y el multilinea seria /*Hola esto es un comentario*/

## Tipado Javascript

Tipado inferido, quiere decir que nosotros al definir alguna variable, el interprete ya reconoce el tipo de dato dependiendo del tipo que tenga la variable. 

La ventajas son:

+ No necesitamos avisarle que tipo de dato estamos trabajando, nos ayuda programar mas rapido. 

+ Nos da mas libertad para dirigir nuestro programa dependiendo del tiopo de dato

Desventajas:

+ No nos dara ningun error, al asignar otro tipo de dato a una variable, si es demasiado extenso el codigo, tal vez nos traiga algunos errores.

## tipos de datos en javascript

primitivos: 
+ Number (con coma o sin coma)
+ String o cadena de caracteres
+ Boolean (true o false)
+ null (nulo esapcio vacio en memoria)
+ Undefined (No se a definido un valor para una variable)

Estructuras o objetos:
+ Objetos
+ Matriz o array
+ Funciones
+ Listas
+ Mapas

## Variable

Explicandolo de forma que podamos comprenderlo podria ser una vaja donde guardamos datos, para leugo ser usada llamadnola por su nombre.

En realidad lo que hacemos es asignar un valor en memoria, agregandole un nombre.

La diferencia entre variables y constantes es que a las variables le podemos reasignar un valor y a las constantes no, siempre permanecen inmutables.

Hay una convencion que nos dice que a las constantes se les agrega el nombre en mayusculas.

La diferencia radica en que let tiene un ambito local o entre {} y var tiene un ambito global. Es buena practica usar let. No es buena practica usar el mismo nombre para las variables. 

El var lo podremos usar en un caso muy especifico dependiendo de lo que queramos lograr.

## typeOf

Con este operador podremos saber que tipo de dato es una variable o un valor en especifico. 


## Notacion en Javascript

Se refiere a que signos o simbolos usamos para escribir en javascript. (;,[],{})

; --> Es el final de una linea. Al dia de hoy se puede eliminar el ; pero es buena practica colocarlo. 

. --> Se usa para acceder a un valor dentro de los objetos o atributos. cancion.autor

[] --> Los corchetes cuadrados o brackets funcionan para listas, arreglos o arrays, los tres son la misma cosa o para acceder a un valor del array.  let arr = [1,2,3,4], arr[3]

() --> Se usa para funciones o lo que va dentro de los parentesis. 

{} --> Se usa para objetos, funciones y estructuras de control como if, for, dowhile etc. 

## Listas, objetos y fechas

Lista, es un conjunto de variables puestas en orden, comunmente llamados arrays, van dentro de la notacion en corchetes.

    const lista = [1, 'Hola', undefined, null]
    const lista2 = new Array(1,2,3,'String', undefined)

podemos colocar lo que nosotros deseemos dentor de ella. Se crean igual que las dos formas atneriores.  

Podemos definir los espacios interiores sin colocar valores alli asi. 

    const lista3 = new Array(3);
    lista3[0] = 'Soy el primero'

Nos creara un array con 3 espacios para colocar valores dentro de ellos.

Tambien se pueden anidar listas dentro de listas. 

    const lista4 = [1,[2,3,4]]

## Objetos 

Javacript es un lenguaje orientado a objetos, quiere decir que son representaciones de datos de la vida real ejemplo. 

    const movil = {
        altura : 10,
        anchura : 5,
        marca : 'Vivo',
        is2022 : false,
        contactos: ['Gorka','Martin','Raul'],
        tarjeta{
            marca: 'Sandisk',
            almacenamiento: 64
        }
    }

Como vemos anteriormente dentro de un objeto podemos agregar cualquier tipo de valor, como listas, otros objetos, primitivos etc. 

Si queremos acceder a un objeto usamos la notacion de punto. 

    movil.tarjeta.marca //acceder al objeto dentro del objeto.

Para definir nuevas propiedades.

    movil.anyo = 2019;
    movil.marca = 'Samsung';

Lo que definimos como constante es el movil, pero no sus propiedades. 

Si por cualquier necesidad necesitamos colocar caracteres especiales. Usamos '' para los keys.

##  Fechas

Trabajar con fechas suele ser complejo. Podemos ayudarnos de una libreria llamada Moment.js que funciona mucho mejor. 

   const ahora = new Date(); // nos coloca la fecha en el momento de definir la variable. 

Trabajar con fechas poersonalizadas dentro de los parentesis new Date(), se puede definir los milisegundos desde 1970

    const fecha_cadena = new Date(2022,0,15)// 15 de enero de 2015

Los meses en la fechas funcionan como los arrays comienzan desde 0 siendo enero.

    const dia = ahora.getDate()//26
    const mes = ahora.getMonth()//1
    const anyo = ahora.getFullYear()//2022

