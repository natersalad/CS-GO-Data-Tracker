// bubble sort function
function bubbleSort(arr, sortBy) {
    let len = arr.length;
    for (var i = 0; i < len-1; i++){
        for (var j = 0; j < len - i - 1; j++){
            if (arr[j][sortBy] > arr[j + 1][sortBy]) {
                // swap
                var temp = arr[j][sortBy];
                arr[j][sortBy] = arr[j + 1][sortBy];
                arr[j + 1][sortBy] = temp;
            }
            
        }
    }
    return arr;
}

// testing function on array of integers
function bubbleSortTester(arr) {
    let len = arr.length;
    for (var i = 0; i < len-1; i++){
        for (var j = 0; j < len - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                // swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            
        }
    }
    return arr;
}


// call the function
var sortedArray = bubbleSortTester([1, 3, 2, 0, 5, 6], "weaponName");
console.log(sortedArray);


function mergeSortTester(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(
        mergeSortTester(left),
        mergeSortTester(right)
    );
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

var sortedArray2 = mergeSortTester([1, 3, 2, 0, 5, 6, -1, -3, -4, 5, 15, 59, -100]);
console.log(sortedArray2);


function insertSortTester(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        for (var j = i - 1; j > -1 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

var sortedArray3 = insertSortTester([1, 3, 2, 0, 5, 6, -1, -3, -4, 5, 15, 59, -100]);
console.log(sortedArray3);

function selectionSortTester(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

var sortedArray4 = selectionSortTester([1, 3, 2, 0, 5, 6, -1, -3, -4, 5, 15, 59, -100]);
console.log(sortedArray4);

function quickSortTester(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortTester(left), pivot, ...quickSortTester(right)];
}

var sortedArray5 = quickSortTester([1, 3, 2, 0, 5, 6, -1, -3, -4, 5, 15, 59, -100]);
console.log(sortedArray5);


// represent the heap as an array
function heapSortTester(arr) {
    var heapSize = arr.length;
    buildMaxHeap(arr);
    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapSize--;
        maxHeapify(arr, heapSize, 0);
    }
    return arr;
}


    


    

// bubble, merge, insert, selection, quick, heap, bogo??