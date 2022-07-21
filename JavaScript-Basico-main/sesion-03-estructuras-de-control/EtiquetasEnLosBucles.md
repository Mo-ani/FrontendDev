## Etiquetas en los bucles 

Funcionan para poder controlar nuestros bucles de mejor forma, realmente esta es una funcionalidad poco conocida en Javascript pero en muchas ocasiones nos ayudaran en casos especificos. 

Los labes nos permiten nombrar los bucles for o while para controlar mejor los brake y continue.

### funcionamiento

Con los labels, le agregamos nombre a los bucles como vemos en el siguiente ejemplo, no son las mejores practicas, pero nos ayudaran a salir de apuros. 

Asi en el ejemplo de abajo le decimos que cuando se cumpla determinada condicion, brake osea rompamos el bucle y luego le espoecificamos el nombre del bucle asi seremos mas espeficos de a donde deseamos que se diriga nuestro condigo. 

    // break y continue
    // labels

    let unidades = 0
    let decenas = 0

    bucleDecenas: while (true) {
        bucleUnidades: while (true) {
            console.log(`El número actual es: ${decenas}${unidades}`)
            unidades++
            if (unidades === 10) {
                unidades = 0
                break bucleUnidades
            }
            if (decenas === 2) {
                break bucleDecenas
            }
        }
        decenas++
    }
    console.log("Ya hemos terminado")