# Switch o interruptor
---
Discierne sobre una variable o un valor, dentro vamos a encontrar casos que realizan determinadas acciones dependiedo del caso. 

Es similar a if con else if, es cuestion de gustos o seguir una guia de estilos. El switch no suele utilizarse mucho en Javascript pero si tenemos muchos else if por eficiencia y mayor claridad del codigo se utiliza. 

    const expression = 'Verano'
    
    switch(expression){
        case 'Verano':
            console.log(`Es verano`)
            break;
        case 'Invierno':
            console.log('Es Invierno')
            break;
        default:
            console.log('No se donde estoy')
    }  

    //Es verano

> Cuando el interprete encuentra un break termina la ejecucion, si no lo coloco el interprete sigue leyendo mi codigo. 