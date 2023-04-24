import { bubbleSort } from "./sort";

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
        let intialMemoryUsage = performance.memory.usedJSHeapSize;
        let sortedList = bubbleSort(this.damageOccurrenceEntries, sortBy)
        let bubbleMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        let bubbleDuration = performance.now() - start;

        // start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
        // mergeSort(this.damageOccurrenceEntries, sortBy)
        // let mergeMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        // let mergeDuration = performance.now() - start;

        // start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
        // insertionSort(this.damageOccurrenceEntries, sortBy)
        // let insertionMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        // let insertionDuration = performance.now() - start;

        // start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
        // selectionSort(this.damageOccurrenceEntries, sortBy)
        // let selectionMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        // let selectionDuration = performance.now() - start;

        // start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
        // quickSort(this.damageOccurrenceEntries, sortBy)
        // let quickMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        // let quickDuration = performance.now() - start;

        // start = performance.now();
        // intialMemoryUsage = performance.memory.usedJSHeapSize;
        // heapSort(this.damageOccurrenceEntries, sortBy)
        // let heapMemoryUsage = performance.memory.usedJSHeapSize - intialMemoryUsage;
        // let heapDuration = performance.now() - start;

        return {
            sortBy: sortBy,
            sortedList: sortedList,
            bubbleSortData: {
                duration: bubbleDuration,
                memoryUsage: bubbleMemoryUsage
            },
            // mergeSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // },
            // insertSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // },
            // selectionSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // },
            // quickSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // },
            // heapSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // },
            // bucketSortData: {
            //     duration: "swoase",
            //     memoryUsage: "swoasememory"
            // }
        }
    }
}


