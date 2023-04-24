import { bubbleSort } from "./sort.js";

//made a weapon class to hold all parameters about specific weapons (we can add onto this)
export default class DamageOccurrence {
    constructor(weaponName, hpDamage, armorDamage, hitbox){
        this.weaponName = weaponName;
        this.hpDamage = hpDamage;
        this.armorDamage = armorDamage;
        this.hitbox = hitbox;
        this.totalDamage = hpDamage + armorDamage;
    }
}

export class DamageOccurrenceEntries {
    constructor(damageOccurrenceEntries){
        this.damageOccurrenceEntries = damageOccurrenceEntries;
    }

    outputSortData(sortBy, sort1, sort2) {

        let start = performance.now();
        let sortedList = bubbleSort(this.damageOccurrenceEntries, sortBy)
        let bubbleDuration = performance.now() - start;

        return {
            sort1: sort1,
            sort2: sort2,
            sortBy: sortBy,
            sortedList: sortedList,
            bubbleSortStats: {
                duration: bubbleDuration,
            },
            
        }
    }
}


