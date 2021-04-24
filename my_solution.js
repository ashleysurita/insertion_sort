function insertionSort(array) {
    if (!array || !array.length) return []
    if(array.length === 1) return array
    
    for(let i = 1; i < array.length; i++){
        // check if needs to swap
        if(array[i] < array[i-1]){
            // if needs to swap, keep swapping until sorted or until reaches beginning of array
            let j = i
            while(j > 0 && array[j-1] > array[j]){
                [[array[j], array[j -1]]] = [[array[j-1], array[j]]]
                j--
            }
        }
    }    
    return array
}

// Test Cases
console.log(insertionSort([])) // []
console.log(insertionSort([1])) // [1]
console.log(insertionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
