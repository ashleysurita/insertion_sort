def insertionSort(array: [int]) -> [int]:
    if not array:
        return []
    if len(array) == 1:
        return array
    
    for i in range(1, len(array)):
        if array[i] < array[i-1]:
            j = i
            while j > 0 and array[j] < array[j-1]:
                [array[j], array[j-1]] = [array[j - 1], array[j]]
                j-=1
        
    return array

# Test Cases
print(insertionSort([])) # []
print(insertionSort([1])) # [1]
print(insertionSort([3, 1, 2, 4])) # [1, 2, 3, 4]
print(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) # [-13, -10, 1, 3, 5, 8, 9, 32]
