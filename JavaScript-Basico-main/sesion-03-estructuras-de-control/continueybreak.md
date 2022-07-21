## Brake y continue

Con esto podremos controlar los bucles dentro de nuestro programa. 

### Brake

En los bucles con brake lo que decimos al interprete es que si se cumple cierta condicion termine el bucle ahi.

Ejemplo

    const arr = [1,2,3,4,5,6,7,8,9,10];

    for(numero of arr){
        console.log(numero);
        if(numero > 5){
            break;
        }
    };

### Continue

Con esto somos mas especificos y le decimos al interprete que si se cumple la condicion continue con el bucle, ignorando los valores antes o el valor de la condicion. 

    const arr = [1,2,3,4,5,6,7,8,9,10];

    for(numero of arr){
      	if(numero <= 3){
          continue;
        }
        console.log(numero);
    };
    
El resultado seria:

    4
    5
    6
    7
    8
    9
    10

No suelen ser buenas praticas usar continue y brake, ya que dificulta la legibilidad del codigo, como sabemos suele ser mala practica que algo afecte esa legibilidad. 

### Ambito de un bucle.

Se refiere al alcance que tienen las variables declaradas en el bucle. 

Por ejemplo para for usamos i con let y lo intentamos consologearlo afuera, no nos permitira accceder a el ya que todo lo que este dentro de los {} es un ambito, pero si lo declaramos con var, nos dara el resultado ya que var es un ambito global. 

Las constantes tiene un ambito de bloque igual que let, asi que no podremos acceder a ellas por fuera de donde fueron declaradas. 


