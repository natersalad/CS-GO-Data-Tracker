//import all the sorting algorithms
import * as sort from "./sort.js";


//made a weapon class to hold all parameters about specific weapons (we can add onto this)
export default class DamageOccurrence {
    constructor(weaponName, hpDamage, armorDamage, hitbox) {
        this.weaponName = weaponName;
        this.hpDamage = hpDamage;
        this.armorDamage = armorDamage;
        this.hitbox = hitbox;
        this.totalDamage = hpDamage + armorDamage;
    }
}

export class DamageOccurrenceEntries {
    constructor(damageOccurrenceEntries) {
        this.damageOccurrenceEntries = damageOccurrenceEntries;
    }

    outputSortData(sortBy, sort1, sort2) {
        //match sort1 and sort2 to the correct sorting algorithm
        let sortedList, sort1Duration, sort2Duration, start;
        if (sort1 === "bubbleSort" || sort2 === "bubbleSort") {
            start = performance.now();
            sortedList = sort.bubbleSort(this.damageOccurrenceEntries, sortBy);
            if(sort1 === "bubbleSort") {
                sort1Duration = performance.now() - start;
            }
            else {
                sort2Duration = performance.now() - start;
            }
        }
        if (sort1 === "mergeSort" || sort2 === "mergeSort") {
            start = performance.now();
            sortedList = sort.mergeSort(this.damageOccurrenceEntries, sortBy);
            if(sort1 === "mergeSort") {
                sort1Duration = performance.now() - start;
            }
            else {
                sort2Duration = performance.now() - start;
            }
        }
        if (sort1 === "insertionSort" || sort2 === "insertionSort") {
            start = performance.now();
            sortedList = sort.insertionSort(this.damageOccurrenceEntries, sortBy);
            if(sort1 === "insertionSort") {
                sort1Duration = performance.now() - start;
            }
            else {
                sort2Duration = performance.now() - start;
            }
        }
        if (sort1 === "selectionSort" || sort2 === "selectionSort") {
            start = performance.now();
            sortedList = sort.selectionSort(this.damageOccurrenceEntries, sortBy);
            if(sort1 === "selectionSort") {
                sort1Duration = performance.now() - start;
            }
            else {
                sort2Duration = performance.now() - start;
            }
        }
        if (sort1 === "quickSort" || sort2 === "quickSort") {
            let arrTemp = [...this.damageOccurrenceEntries];
            start = performance.now();
            // pass in low and high
            sortedList = sort.quickSort(arrTemp, 0, arrTemp.length - 1, sortBy);
            if(sort1 === "quickSort") {
                sort1Duration = performance.now() - start;
            }
            else {
                sort2Duration = performance.now() - start;
            }
        }
        if (sort1 === "heapSort" || sort2 === "heapSort") {
            start = performance.now();
            sortedList = sort.heapSort(this.damageOccurrenceEntries, sortBy)
            if(sort1 === "heapSort") {
                sort1Duration = performance.now() - start;
            }
            else {
                sort2Duration = performance.now() - start;
            }
        }

        return {
            sortedList: sortedList,
            sortBy: sortBy,
            sort1Data: {
                sort1: sort1,
                duration: sort1Duration
            },
            sort2Data: {
                sort2: sort2,
                duration: sort2Duration
            }
            // bucketSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // }
        }
    }
}


