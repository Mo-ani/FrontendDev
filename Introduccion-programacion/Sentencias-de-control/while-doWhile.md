# Bucles While y Do while

+ [While](#while)
+ [Do-While](#do-while)
+ [Usos](#usos)
---

## While
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
Una vez mi interprete termina con el bucle, continua con mi codigo.

---
## Do while

La diferencia suele ser muy sutil con el while, en este caso con Do while primero hace la accion y luego se determina la condicion. 

    1|2|3|4

    var contador = 10
    Haz
    restar uno al contador
    mientras (contador mayor a cero)
        
    do{
        console.log(`El numero del contador ahora es: ${contador}`)
        contador--
    }while(contador > 10)

Lo usamos cuando por algun motivo necesitamos que primero se ejecute el codigo y luego evalue la condicion. 

muchos lenguajes no tiene do while, ya que se coloca el codigo que queremos ejecutar antes del while.

---

## Usos 
Se usan cuando queremos comparar dos valores con comparativas.
