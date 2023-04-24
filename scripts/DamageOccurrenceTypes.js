//import all the sorting algorithms
import* as sort from "./sort.js";


//made a weapon class to hold all parameters about specific weapons (we can add onto this)
export default class DamageOccurrence {
    constructor(weaponName, hpDamage, armorDamage){
        this.weaponName = weaponName;
        this.hpDamage = hpDamage;
        this.armorDamage = armorDamage;
        this.totalDamage = hpDamage + armorDamage;
    }

}

export class DamageOccurrenceEntries {
    constructor(damageOccurrenceEntries){
        this.damageOccurrenceEntries = damageOccurrenceEntries;
    }

    outputSortData(sortBy) {
        let start = performance.now();
        let sortedList = sort.bubbleSort(this.damageOccurrenceEntries, sortBy);
        let bubbleDuration = performance.now() - start;

        start = performance.now();
        //intialMemoryUsage = performance.memory.usedJSHeapSize;
        sortedList = sort.mergeSort(this.damageOccurrenceEntries, sortBy);
        //let mergeMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        let mergeDuration = performance.now() - start;

        start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
         sortedList = sort.insertionSort(this.damageOccurrenceEntries, sortBy);
        // let insertionMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        let insertionDuration = performance.now() - start;

         start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
         sortedList = sort.selectionSort(this.damageOccurrenceEntries, sortBy);
        // let selectionMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
         let selectionDuration = performance.now() - start;

         start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
        sortedList = sort.quickSort(this.damageOccurrenceEntries, sortBy);
        // let quickMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
         let quickDuration = performance.now() - start;

         start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
         sortedList = sort.heapSort(this.damageOccurrenceEntries, sortBy)
        // let heapMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
         let heapDuration = performance.now() - start;

        return {
            sortBy: sortBy,
            sortedList: sortedList,
            bubbleSortStats: {
                duration: bubbleDuration,
            },
            mergeSortData: {
                duration: mergeDuration,
            },
             insertSortData: {
                 duration: insertionDuration,
            //     memoryUsage: "swoasememory"
             },
             selectionSortData: {
                 duration: selectionDuration,
            //     memoryUsage: "swoasememory"
             },
             quickSortData: {
                 duration: quickDuration,
            //     memoryUsage: "swoasememory"
             },
             heapSortData: {
                 duration: heapDuration,
            //     memoryUsage: "swoasememory"
             },
            // bucketSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // }
        }
    }
}


