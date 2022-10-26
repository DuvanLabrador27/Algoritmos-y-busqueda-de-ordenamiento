package main

import "fmt"

func main(){
    numeros := []int{5, 10, 15, 20, 25}
    fmt.Println(BusquedaSecuencial(numeros, 10)) 
}

func BusquedaSecuencial(numeros []int, valor int) int {
	// recorrer el arreglo numeros hasta encontrar el valor
	for k, v := range numeros {
		// verificar si el valor iterado coincide con el que se busca
		if v == valor {
			// retornar el indice
			return k
		}
	}
	// retornar -1 si ningun valor coincide
	return -1
}

