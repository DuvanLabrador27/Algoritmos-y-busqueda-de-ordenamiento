

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

