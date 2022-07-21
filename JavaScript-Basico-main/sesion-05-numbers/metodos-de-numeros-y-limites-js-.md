## Métodos de numbers y límites en JS

--- 

### Obtener valores numericos a partir de literales
En Javascript los objetos que declaramos se basan en prototipos.
Quiere decir que tambien podremos inicializar un numero con un prototipo number.

    let a = 2;
    let b = new Number(3);

    console.log(a); // 2
    console.log(b); /*[Number: 3] {__proto__: {...}}*/

Aunque se comporte como un numero, cunado lo consologeamos nos muestra el prototipo de number que usamos. 

Castear o casting quiere decir que le decimos al interprete que no nos muestre por consola el prototipo, le podemos decir con valueOf();

    console.log(a.valueOf() + b.valueOf());
    console.log(b.valueOf());//3

Castear en pocas palabras es obtener los valores primitivos de una inicializacion con new osea como objeto.

Tambien podemos castear strings.

    let str = new String("Hola soy un string");
    console.log(str);/*String {
    '0': 'H',
    '1': 'o',
    '2': 'l',
    '3': 'a',
    '4': ' ',
    '5': 's',
    '6': 'o',
    '7': 'y',
    '8': ' ',
    '9': 'u',
    '10': 'n',
    '11': ' ',
    '12': 's',
    '13': 't',
    '14': 'r',
    '15': 'i',
    '16': 'n',
    '17': 'g',
    length: 18,
    __proto__: {...}
    }*/
    console.log(str.valueOf()); //'Hola soy un string'

### NaN - Infinity

Quiere decir que estamos haciendo una operacion con un valor que no es un numero. 

    let n = Number('adios');
    console.log(n); //NaN

Tenemos un metodo que nos dice que si algo es un numero.

    console.log(isNaN(n)); // true

+ Infinity, al hacer operaciones como divisiones donde el divisor es 0, obtendremos muchos numeros. Inmediatamente el interprete nos arrojara infinity. Para ser mas simples es cuando se excede el numero maximo al que podemos acceder en memoria.

    let numerador = 19;
    let divisor = 0;
    console.log(numerador / divisor);//Infinity

    let divisor_2 = null;
    console.log(numerador / divisor_2);//Infinity

Los valores ±Infinity no dejan de ser números y podemos operar con ellos tal como podríamos hacerlo con el concepto matemático de infinito. En los casos de indeterminaciones obtendremos un NaN:

### Convertir strings a numeros con parseInt y parseFloat

Podremos convertir string a number para poder hacer operaciones que requieran un valor string. Ya que si queremos hacer alguna operacion que lo requiera nos concatenara

+ Number

    let numero = '5.89';
    let num2 = 17.2;
    
    console.log(typeof numero); // 'string'
    console.log(numero + num2); // Error de concepto '5.8917.2' concatena
    
Usando Number();

    console.log(Number(numero) + num2); //23.09