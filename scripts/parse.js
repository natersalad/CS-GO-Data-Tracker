import DamageOccurrence, { DamageOccurrenceEntries } from './DamageOccurrenceTypes.js';
import * as fs from 'fs';

const csv = fs.readFileSync('data/newdata.csv', 'utf-8');
const rows = csv.split('\n').slice(1);
const damageOccurrences = [];

rows.forEach(row => {
    const columns = row.split(',');
    const name = columns[16];
    const hpDamage = parseInt(columns[11]);
    const armorDamage = parseInt(columns[12]);
    let damageOccurrence = new DamageOccurrence(name, hpDamage, armorDamage)
    damageOccurrences.push(damageOccurrence);
});

const damageOccurrenceEntries = new DamageOccurrenceEntries(damageOccurrences);

//this is here just to test, we can delete this later.
console.log(damageOccurrenceEntries.outputSortData("weaponName"));
  
  
