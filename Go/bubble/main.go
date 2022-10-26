package main

import "fmt"

func main() {

	arr := []int{7666717667, 6896564686, 5788982785, 4233222323, 3463654643, 2434542242}

	for i := 0; i < len(arr); i++ {

		for j := 0; j < len(arr)-i-1; j++ {

			if arr[j] > arr[j+1] {

				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp

			}
		}

	}
	fmt.Println(arr)
}
