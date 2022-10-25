
/* Algoritmo de Busqueda Lineal en JavaScript 
* Autores: https://github.com/albertaw (Usernames de Github)
* Enlace: https://code.tutsplus.com/es/tutorials/the-binary-search-algorithm-in-javascript--cms-30003
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


function binarySearch(value, list) {
    
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}
