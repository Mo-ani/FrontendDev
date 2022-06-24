# Bucles
---

Hacer algo un numero determinado de veces, un fragmento de codigo se va a ejecutar mientras se cumpla una condicion.

    1|2|3|4

    var contador = 10
    mientras (contador mayor a cero)
        restar uno al contador

Ahora veamoslo con un ejemplo en Javascript

    let contador =  10
    while(contador > 0){
        console.log(`El numero del contador ahora es: ${contador}`)
        contador--
    }