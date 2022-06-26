# Depuracion de codigo

+ [Definicion](#definicion)
+ [Breakpoints](#breack-points)
+ [watcher](#watcher)
+ [Herramientas](#herramientas)
+ [Stack](#pila-de-llamadas-o-stack)

---

### Definicion

Consiste en buscar anomalias o problemas en la ejecucion de nuestro programa. Es una herramienta que nos ayuda a prevenir. 

Javascript nos otorga un depurador en Devtools de google chrome, para poder usarlo. 

### Breack points

Funciona mediante puntos de ruptura o break point, que es donde le decimos donde debe parar el codigo en nuestro entorno, esto se hace para ejecutar una porcion de codigo y poder analizar la misma. 

Una vez llegado a este punto el programa se detiene para que yo haga algo, generalmente se usan los botones de control para analizar esa porcion. 

En visual estudio podemos colocarlos a la izquierda al lado del numero de linea. 

> los break points deben ubicarse estrategicamente en los puntos calientes o lugares donde vemos que algo esta saliendo mal en nuestro codigo. 

### Watcher

Lo usamos para poder ver que variables y entornos de ejecucion se crearon entre los brackpoint y saber como se crean durante la ejecucion del codigo. 

### Herramientas
Podriamos considerar un depurador como una herramienta para cazar bugs que nos permite encontrarlos en el codigo y exterminarlos. 

Tenemos una serie de herramientas que nos permiten ver exactamente que sucede con nuestro codigo, dandonos detalles de todo, cuando un valor cambia, porque cambia, que nuevo valor tiene una variable, etc. 

### pila de llamadas o stack

Nos muestra por que funciones hemos pasado, que se a invocado durante la ejecuion de nuestro codigo. 

En javascript podemos verlo como una pila de platos, la primera invocacion es la ultima en salir, mientras se va ejecutando todo lo demas. 

tenemos un limite de llamadas, podemos petar la memoria y nos saldra un error de call stack excesed

Podemos profundizar mas con [esta](https://developer.mozilla.org/es/docs/Glossary/Call_stack) documentacion

