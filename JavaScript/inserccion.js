console.time('Duracion'); //Estimacion de tiempo de Ejecucion para caso #1
console.time('Duracion2');//Estimacion de tiempo de Ejecucion para caso #2
console.time('Duracion3');//Estimacion de tiempo de Ejecucion para caso #3
console.time('Duracion4');//Estimacion de tiempo de Ejecucion para caso #4
console.log("##############################");
console.log("# Ordenamiento por Insercion #");
console.log("##############################");

/* Algoritmo de Insercion en JavaScript 
* Autores: raklaptudirm, vinayak, HereBeAndre &lvlte(Usernames de Github)
* Enlace: https://github.com/TheAlgorithms/JavaScript/blob/master/Sorts/InsertionSort.js
*/
 function insercionsort (array) {
    const length = array.length //Tamaño del arreglo 
  
    for (let i = 1; i < length; i++) {
      
      const currentItem = array[i] //Almacena el valor actual dentrro del recorrido del arreglo
      
      let j = i - 1 //Almacena el indice del elemento anterior del arreglo
  
      // Mientras que  j >= 0 y el valor del elemento anterior o hacia el lat izquierda (<-) sea mayor al que el elemento actual
      while (j >= 0 && array[j] > currentItem) {
        // Intercambia el valor mayor una posicion hacia la  parte del arreglo que no esta ordenado
        array[j + 1] = array[j]
        j--
      }
      //Inserta la variable currentItem en la posicion correcta en la parte ordenada del arreglo
      array[j + 1] = currentItem
    }
    // Retorna el arreglo ordenado ascedentemente
    return array
  }


//Caso de Prueba ! ! ! ! ! !

//CASO #1 - ARREGLO ORDENADO
console.log("Caso #1 - Generando numeros aleatorios e imprimiendo");
var a = Math.floor(Math.random()*(100-1+1)+1);
var b = Math.floor(Math.random()*(1000-100+1)+100);
var c = Math.floor(Math.random()*(1000000-10000+1)+10000);
var d = Math.floor(Math.random()*(1000000000-1000000+1)+1000000);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("Aplicar algoritmo al siguiente arreglo");
var arregloordenado = [a,b,c,d];
console.log(arregloordenado)
console.log("- . - . - . - . - . - . - . -");
console.log("El resultado del arreglo ordenado de manera ascendete es:");
console.log(insercionsort(arregloordenado));
console.timeEnd('Duracion');
console.log("#############################");
//CASO #2 - ARREGLO inversamete ordenado
console.log("Caso #2 - Generando numeros aleatorios e imprimiendo");
var a = Math.floor(Math.random()*(100-1+1)+1);
var b = Math.floor(Math.random()*(1000-100+1)+100);
var c = Math.floor(Math.random()*(1000000-10000+1)+10000);
var d = Math.floor(Math.random()*(1000000000-1000000+1)+1000000);
console.log(d);
console.log(c);
console.log(b);
console.log(a);
console.log("Aplicar algoritmo al siguiente arreglo");
var arregloinverso = [d,c,b,a];
console.log(arregloinverso)
console.log("- . - . - . - . - . - . - . -");
console.log("El resultado del arreglo ordenado de manera descendente es:");
console.log(insercionsort(arregloinverso));
console.timeEnd('Duracion2');
console.log("#############################");
//CASO #3 - ARREGLO SEMIORDENADO
console.log("Caso #3 - Generando numeros aleatorios e imprimiendo");
var a = Math.floor(Math.random()*(100-1+1)+1);
var b = Math.floor(Math.random()*(1000-100+1)+100);
var c = Math.floor(Math.random()*(1000000-10000+1)+10000);
var d = Math.floor(Math.random()*(1000000000-1000000+1)+1000000);
console.log(a);
console.log(b);
console.log(d);
console.log(c);
console.log("Aplicar algoritmo al siguiente arreglo");
var arregloparcialord= [a,b,d,c];
console.log(arregloparcialord)
console.log("- . - . - . - . - . - . - . -");
console.log("El resultado del arreglo casi ordenado es:");
console.log(insercionsort(arregloparcialord));
console.timeEnd('Duracion3');
console.log("#############################");
//CASO #4 - ARREGLO DESORDENADO
console.log("Caso #4 - Generando numeros aleatorios e imprimiendo");
var a = Math.floor(Math.random()*(100-1+1)+1);
var b = Math.floor(Math.random()*(1000-100+1)+100);
var c = Math.floor(Math.random()*(1000000-10000+1)+10000);
var d = Math.floor(Math.random()*(1000000000-1000000+1)+1000000);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("Aplicar algoritmo al siguiente arreglo");
var arreglodesordenado = [d,a,c,b];
console.log(arreglodesordenado)
console.log("- . - . - . - . - . - . - . -");
console.log("El resultado del arreglo desordenado es:");
console.log(insercionsort(arreglodesordenado));
console.timeEnd('Duracion4');
console.log("#############################");
