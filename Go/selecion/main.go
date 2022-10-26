package main

import "fmt"

func main() {

		arr := []int{9592138345, 9213834527, 3541323322, 2735411324, 3216315632, 1302431018}

		for i := 0; i < len(arr); i++ {
			minimo := i
			for j := i + 1; j < len(arr); j++ {
				if arr[minimo] > arr[j] {
					minimo = j
				}
			}

			temp := arr[i]
			arr[i] = arr[minimo]
			arr[minimo] = temp
		}
		
		fmt.Println(arr)
		
	}
      
	
	
	


	
	