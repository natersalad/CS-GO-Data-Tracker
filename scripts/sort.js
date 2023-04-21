import { DamageOccurrenceEntries } from "./DamageOccurrenceTypes.js";

// bubble sort function
export function bubbleSort(arr, sortBy) {
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

// call the function
var sortedArray = bubbleSort(DamageOccurrenceEntries, "weaponName");
console.log(sortedArray);



// bubble, merge, insert, selection, quick, heap, bogo??