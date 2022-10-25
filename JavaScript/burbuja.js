

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


