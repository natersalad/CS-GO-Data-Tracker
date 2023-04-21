// bubble sort function
export function bubbleSort(arr, sortBy) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1][sortBy] > arr[j][sortBy]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// call the function
var sortedArray = bubbleSort([3, 0, 2, 5, -1, 4, 1]);
console.log(sortedArray);



// bubble, merge, insert, selection, quick, heap, bogo??