
/* Algoritmo de Busqueda Lineal en JavaScript 
* Autores: lvlte, itsvinayak & raklaptudirm (Usernames de Github)
* Enlace: https://github.com/TheAlgorithms/JavaScript/blob/master/Search/LinearSearch.js
*/


function SearchArray (searchNum, ar) {
    const position = Search(ar, searchNum)
    if (position !== -1) {
        return console.log('El elemento fue encontrado en la posicion:  ' + (position + 1));
    } else {
        console.log('El elemento no existe');
    }
  }
  
  // Search “theArray” for the specified “key” value
  function Search (theArray, key) {
    for (let n = 0; n < theArray.length; n++) {
      if (theArray[n] === key) { return n }
    }
    return -1
  }

