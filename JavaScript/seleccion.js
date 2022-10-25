console.time('Duracion'); //Estimacion de tiempo de Ejecucion para caso #1
console.time('Duracion2');//Estimacion de tiempo de Ejecucion para caso #2
console.time('Duracion3');//Estimacion de tiempo de Ejecucion para caso #3
console.time('Duracion4');//Estimacion de tiempo de Ejecucion para caso #4
console.log("##############################");
console.log("# Ordenamiento por Seleccion #");
console.log("##############################");

/* Algoritmo de Seleccion en JavaScript 
* Autores: itsvinayak, tricinel, Eric Lavault & Fireairforce (Usernames de Github)
* Enlace: https://github.com/TheAlgorithms/JavaScript/blob/master/Sorts/SelectionSort.js
*/
const selectionSort = (list) => { 
  if (!Array.isArray(list)) {
    throw new TypeError('Given input is not an array') //Salta error respecto a que el parametro no es un arreglo
  }
  const items = [...list] //Crea y asigna un arreglo con los mismo elementos y tamaño del arreglo enviado
  const length = items.length //crea y asigna una variable constante que define el tamaño del arreglo
  for (let i = 0; i < length - 1; i++) {
    if (typeof items[i] !== 'number') {
      throw new TypeError('One of the items in your array is not a number') //ERROR,Un elemento del arreglo NO es un numero
    }
    // Cantidad de Iteracciones
    let min = i //Esta variable mantiene la posicion del elemento mas pequeño de un arreglo durante su recorrido
    for (let j = i + 1; j < length; j++) { // J=I+1 porque solo queremos recorrer las posiciones que no estan ordenadas
      if (items[j] < items[min]) { // Compara si el elemento en la posicion J es menor al elemento en la posicion min
        min = j //Si se cumple la condicion, entonces el valor de min pasa a valer la posicion del elemento mas pequeño 
      
      }
    }
    if (min !== i) {
      // Despues de cada iteraccion si el valor mas pequeño actual es diferente al valor inicial, entonces se intercambia
      // Intercambiando la posicion y sus numeros(valores)
      [items[i], items[min]] = [items[min], items[i]]
    }
  }
  return items //Retorna el arreglo ordenado 
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
console.log(selectionSort(arregloordenado));
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
console.log(selectionSort(arregloinverso));
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
console.log(selectionSort(arregloparcialord));
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
console.log(selectionSort(arreglodesordenado));
console.timeEnd('Duracion4');
console.log("#############################");
