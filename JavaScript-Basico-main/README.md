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

