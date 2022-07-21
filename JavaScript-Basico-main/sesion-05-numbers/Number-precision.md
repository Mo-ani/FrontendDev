//Sesion 5 numbers

## Numbers y precisión en JS

En este modulo entenderemos como se comporta Javascript con los numeros. 


+ Enteros

Numeros positivos o negativos que no tienen un . o decimal. 

    Let a = 5;

+ tambien tenemos los flotantes. 

    let b = 5.1;

En javascrip tanto los flotantes como los enteros se declaran igual y para Javascript es un numero independientemente del tipo.

### Precision

Cuando tenemos alguna operacion con flotantes no se puede llegar a la precision que deseamos, podemos ver como Javascript nos agrega muchos ceros, debido a la memoria que le asigna a cada una de ellas.  

    let b = 0.1;
    let c = 0.2;

    console.log(b+c); //0.30000000000000004

### Redondear hacia abajo sin decimales.

Cuando tenemos una operacion con decimales, como la mostrada en el ejemplo anterior. Podemos utilizar round con la siguiente formula, para asi poder acceder al valor que deseamos quitandoles los ceros. 

    console.log(Math.round((0.1 + 0.2) * 100)/100); //0.3

Con esto ya tendremos el valor que deseamos. 

