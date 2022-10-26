package main

import "fmt"
import "math"

func main() {
	arregloDeNumeros := []int{1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10, 12, 15, 18, 20, 21}
	busquedaNumerica := 44
	
	resultadoBusquedaNumerica := busquedaBinaria(arregloDeNumeros, busquedaNumerica)
	fmt.Printf("[Secuencial] Buscando %d en %v... el índice devuelto es %d\n", busquedaNumerica, arregloDeNumeros, resultadoBusquedaNumerica)
}


func busquedaBinaria(arreglo []int, busqueda int) (indice int) {

	izquierda := 0
	derecha := len(arreglo) - 1
	/*
	   Recordemos que For is Go's "while"
	   https://tour.golang.org/flowcontrol/3
	*/
	for izquierda <= derecha {
		indiceDelMedio := int(math.Floor((float64(izquierda+derecha) / 2)))
		elementoDelMedio := arreglo[indiceDelMedio]
		if elementoDelMedio == busqueda {
			return indiceDelMedio
		}
		if busqueda < elementoDelMedio {
			derecha = indiceDelMedio - 1
		} else {
			izquierda = indiceDelMedio + 1
		}
	}
	return -1
}

