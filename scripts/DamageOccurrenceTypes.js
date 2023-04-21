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
        //todo: use methods to determine performance
        return {
            sortBy: sortBy,
            sortedList: "some list soon",
            mergeSortData: {
                duration: "swoase",
                memoryUsage: "swoasememory"
            }
        }
    }
        
}


