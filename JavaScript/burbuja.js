console.time('Duracion'); //Estimacion de tiempo de Ejecucion para caso #1
console.time('Duracion2');//Estimacion de tiempo de Ejecucion para caso #2
console.time('Duracion3');//Estimacion de tiempo de Ejecucion para caso #3
console.time('Duracion4');//Estimacion de tiempo de Ejecucion para caso #4
console.log("##############################");
console.log("# Ordenamiento por Burbuja #");
console.log("##############################");

/* Algoritmo de Brbuja en JavaScript 
* Autores: marsonya, defaude, mohan-murali, itsvinayak, aminhossain  & Fireairforce (Usernames de Github)
* Enlace: https://github.com/TheAlgorithms/JavaScript/blob/master/Sorts/BubbleSort.js
*/
 function BubbleSort (arr) {
    let swapped = true //Variable tipo Booleano para verificar si es necesario generar intercambio
  
    while (swapped) { //Mientras dicha variable sea verdadera
      swapped = false //se declara en falso, porque hasta ahora no es necesario aplicar ningun ordenamiento
      for (let i = 0; i < arr.length - 1; i++) {  //Iterando cada elemento del arreglo
        if (arr[i] > arr[i + 1]) {   // ¿ El elemento actual es mayor al elemento siguiente ?
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //Si es cierto, intercambia sus valores entre el elemento actual respecto al siguiente
          swapped = true //Intercambio se vuelve verdadero y genera otra vez el bucle hasta que sea falso
        }
      }
    }
  
    return arr
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
console.log(BubbleSort(arregloordenado));
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
console.log(BubbleSort(arregloinverso));
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
console.log(BubbleSort(arregloparcialord));
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
console.log(BubbleSort(arreglodesordenado));
console.timeEnd('Duracion4');
console.log("#############################");
