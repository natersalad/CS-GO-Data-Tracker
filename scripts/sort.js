// array of damage occurences, each occurence is an object with a weapon name, hp damage, armor damage

// bubble sort function
export function bubbleSort(arr, sortBy) {
    let arrTemp = [...arr];
    let len = arr.length;
    for (var i = 0; i < len-1; i++){
        for (var j = 0; j < len - i - 1; j++){
            if (arrTemp[j][sortBy] > arrTemp[j + 1][sortBy]) {
                // swap
                var temp = arrTemp[j];
                arrTemp[j] = arrTemp[j + 1];
                arrTemp[j + 1] = temp;
            }
            
        }
    }
    return arrTemp;
}



export function mergeSort(arr, sortBy) {
    let arrTemp = [...arr];
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arrTemp.length / 2);
    const left = arrTemp.slice(0, middle);
    const right = arrTemp.slice(middle);
    return merge(
        mergeSort(left, sortBy),
        mergeSort(right, sortBy)
    );
}

export function merge(left, right, sortBy) {   
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][sortBy] < right[rightIndex][sortBy]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }       
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export function insertionSort(arr, sortBy) {
    let arrTemp = [...arr];
    for (var i = 1; i < arr.length; i++) {
        var current = arrTemp[i];
        for (var j = i - 1; j > -1 && arrTemp[j][sortBy] > current[sortBy]; j--) {
            arrTemp[j + 1] = arrTemp[j];
        }
        arrTemp[j + 1] = current;
    }
    return arrTemp;
}

export function selectionSort(arr, sortBy) {
    let arrTemp = [...arr];
    for (var i = 0; i < arrTemp.length; i++) {
        var min = i;
        for (var j = i + 1; j < arrTemp.length; j++) {
            if (arrTemp[j][sortBy] < arrTemp[min][sortBy]) {
                min = j;
            }
        }
        if (i !== min) {
            var temp = arrTemp[i];
            arrTemp[i] = arrTemp[min];
            arrTemp[min] = temp;
        }
    }
    return arrTemp;
}

// referenced from Aman Lecture Slides
// set pivot as first element
export function partition(arr, low, high, sortBy) {
    let pivot = arr[low][sortBy];
    let up = low;
    let down = high;

    while (up < down) {
        for (var j = up; j < high; j++){
            if(arr[up][sortBy] > pivot){
                break;
            }
            up++;
        }
        for (var k = high; k > low; k--){
            if(arr[down][sortBy] < pivot){
                break;
            }
            down--;
        }
        if (up < down) {
            swap(arr, up, down);

        }
    }
    swap(arr, low, down);

    return down;
}

export function quickSort(arr, low, high, sortBy) {
    if (low < high) {
        let pivot = partition(arr, low, high, sortBy);
        quickSort(arr, low, pivot - 1, sortBy);
        quickSort(arr, pivot + 1, high, sortBy);
    }
    return arr;
}

// represent heap as array
export function heapSort(arr, sortBy) {
    let arrTemp = [...arr];
    var heapSize = arrTemp.length;
    buildMaxHeap(arrTemp, sortBy);
    for (var i = arrTemp.length - 1; i > 0; i--) {
        swap(arrTemp, 0, i);
        heapSize--;
        maxHeapify(arrTemp, 0, heapSize, sortBy);
    }
    return arrTemp;
}

export function buildMaxHeap(arr, sortBy) {
    var heapSize = arr.length;
    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
        maxHeapify(arr, i, heapSize, sortBy);
    }
}

export function maxHeapify(arr, i, heapSize, sortBy) {
    var left = i * 2 + 1;
    var right = i * 2 + 2;
    var largest = i;
    if (left < heapSize && arr[left][sortBy] > arr[largest][sortBy]) {
        largest = left;
    }
    if (right < heapSize && arr[right][sortBy] > arr[largest][sortBy]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        maxHeapify(arr, largest, heapSize, sortBy);
    }
}

export function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


export function shellSort(arr, sortBy) {
    let arrTemp = [...arr];
    let len = arrTemp.length;
    for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (var i = gap; i < len; i++) {
            var temp = arrTemp[i];
            var j;
            for (j = i; j >= gap && arrTemp[j - gap][sortBy] > temp[sortBy]; j -= gap) {
                arrTemp[j] = arrTemp[j - gap];
            }
            arrTemp[j] = temp;
        }
    }
    return arrTemp;
}



// function quickSortTester(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     var pivot = arr[arr.length - 1];
//     var left = [];
//     var right = [];
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSortTester(left), pivot, ...quickSortTester(right)];
// }

// var sortedArray5 = quickSortTester([1, 3, 2, 0, 5, 6, -1, -3, -4, 5, 15, 59, -100]);
// console.log(sortedArray5);


// // represent the heap as an array
// function heapSortTester(arr) {
//     var heapSize = arr.length;
//     buildMaxHeap(arr);
//     for (var i = arr.length - 1; i > 0; i--) {
//         swap(arr, 0, i);
//         heapSize--;
//         maxHeapify(arr, heapSize, 0);
//     }
//     return arr;
// }

// function buildMaxHeap(arr) {
//     for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
//         maxHeapify(arr, arr.length, i);
//     }
// }

// function maxHeapify(arr, heapSize, i) {
//     var left = i * 2 + 1;
//     var right = i * 2 + 2;
//     var largest = i;
//     if (left < heapSize && arr[left] > arr[largest]) {
//         largest = left;
//     }
//     if (right < heapSize && arr[right] > arr[largest]) {
//         largest = right;
//     }
//     if (largest !== i) {
//         swap(arr, i, largest);
//         maxHeapify(arr, heapSize, largest);
//     }
// }

// function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// var sortedArray6 = heapSortTester([1, 3, 2, 0, 5, 6, -1, -3, -4, 5, 15, 59, -100]);
// console.log(sortedArray6);


    


    

// // bubble, merge, insert, selection, quick, heap, shell??