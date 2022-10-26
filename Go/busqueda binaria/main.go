package main

import "fmt"

func main() {
	arr := []int{1, 2, 3, 4, 5}

	for j:= 1; j < len(arr); j++ {
		actual := arr[j]
		i := j - 1

		for i >= 0 && arr[i] > actual {
			arr[i+1] = arr[i]
			i = i - 1
		}
		arr[i+1] = actual
	}
	fmt.Println(arr)
}
