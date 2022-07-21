## Tipos de declaracion de strings y cuando utilizarlos

Como hasta ahora sabemos los strings son texto. Que se definen con ''.

    let str_snl = 'String'
    let str_dbl = "String"

Cualquier tipo de string se puede usar, no existe buenas practicas para ello. Importante que si termine con el mismo caracter. '' ""

Tambien durante todo el proyecto que queramos cambiar. 

+ Si queremos anidar un string que vaya con otro string, usamos \"\"


    let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""

+ Tambien podemos usar comillas simples y dentro comillas dobles. 

    let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"'

+ En ES6 tenemos ahora una opcion con el simbolo backticks ``, para poder crear template strings. Lo bueno de esto es que podemos introducir variables dentro de nuestro texto, lo hace de forma mas legible ${}

    let nombre = "Iñigo"
    let saludo = `Hola, ${nombre} bienvenido`

    console.log(saludo) // Hola, Inigo bienvenido.

En algunos frameworks se usan tambien para plantillas html, temas de modulos y componentes. 

    let plantilla = `
    <html>
        <h1>Página web de ${nombre}</h1>
        <p>Este es un párrafo</p>
    </html>
    `;

    console.log(plantilla)

Esto nos ayuda a escribir HTML con el comillado invertido. 

        //// Introducción de variables en html
        let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]

Tambien podemos introducir esto en nuestro condigo html, esto lo veremos mas adelante. 

