
//  creacion de varibles
const name = 'Luis';
const apellido = 'Gonzalez';

//concatenacion de variables string
const estudiante = `${name} ${apellido}`;

console.log(estudiante);

// String a mayusculas
const estudianteMayus = estudiante.toUpperCase();

console.log(estudianteMayus);

//string a minusculas
const estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMinus);

//numero de letras del string

const numEstudiante = estudiante.length;

console.log(numEstudiante)

// Primera letra del nombre 

const primeraLetra = name.charAt(0);
console.log(primeraLetra)

// Ultima letra del apellido.

const ultimaLetra = apellido.charAt(apellido.length - 1)
console.log(ultimaLetra)

// eliminar espacios
const delEspacios = estudiante.replace(/ /g , '');
console.log(delEspacios)

// vasriable booleana 
const incluye = estudiante.includes('Luis');
const incluye2 = estudiante.includes(`${name}`);
console.log(incluye)
console.log(incluye2)
