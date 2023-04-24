// bubble sort function
export function bubbleSort(arr, sortBy) {
    let len = arr.length;
    for (var i = 0; i < len-1; i++){
        for (var j = 0; j < len - i - 1; j++){
            if (arr[j][sortBy] > arr[j + 1][sortBy]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            
        }
    }
    return arr;
}
