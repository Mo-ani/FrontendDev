# Condicionales

+ [Logicas](#condiciones-logicas)
+ [Comparativas](#condiciones-comparativas)
+ [If](#ifelseelse-if)
---
Se refieren al control o reglas que le entregamos a un programa dependiendo de lo que queremos que suceda con el mismo. 

Si cumple con las condiciones se ejecuta el codigo si no, que otra alternativas tenemos. 

---
Los condicionales son condiciones que comparan unas cosas con otroas, se dividen en:

## Condiciones logicas

se dividen en Y o OR

+ Y(and) quiere decir que ambas condiciones se deben cumplir. (&&)
+ O(OR) Se debe cumplir una condicion.(||)

## Condiciones comparativas

se usan para comparar dos valores

+ Mayor que >
+ Menor que <
+ Menor o igual que <=
+ Mayor o igual que >=
+ igual a ==
+ distinto a !=

Comparan el valor de la derecha con el de la izquierda, por lo que tendremos dos resultados ya sea si o no, true o false.

    Un ejemplo sencillo podria ser asi

    40 mayor que 30 => true
    40 menor que 30 => false

    40 mayor que 30 Y 40 menor que 30 => false
    40 mayor que 30 O 40 menor que 30 => true

## If,else,else if
 En la mayoria a de lenguajes existe un si condicional que basicamente me dice lo siguiente.

    let estacion = verano
    let temperatura = 19

    //comparativa
    si estacion igual a verano es verdad entonces
        aqui las acciones a tomar
        beber_agua()
        tomar_cerveza()
    
    //logica
    si la estacion es igual a verano y la temperatura tiene que se mayor 50
        aqui las acciones a tomar
        beber_agua()
        tomar_cerveza()

Encontramos que tambien otras opciones para acceder a otras acciones si no se cumple 

    si estacion igual a verano es verdad entonces:
        aqui las acciones a tomar
        beber_agua()
        tomar_cerveza()
    en ese caso si estacion es igual a primavera entonces
        dormir()
        visitarFamilia()
    en caso contrario entonces:
        verNetflix()
        arruncharse()

en Javascript se suele representar de esta forma:

    //comparativas
    if (estacion == 'verano') {
    	beber_agua()
        tomar_cerveza()
    } else if(estacion == 'primavera'){
    	dormir()
        visitarFamilia()
    }else{
        verNetflix()
        arruncharse()
    }

    //logicas
    if (estacion == 'verano' && temperatura == 50) {
    	beber_agua()
        tomar_cerveza()
    } else{
        verNetflix()
        arruncharse()
    }
