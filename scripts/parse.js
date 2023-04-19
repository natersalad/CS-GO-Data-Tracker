const fs = require('fs');

const csv = fs.readFileSync('data/newdata.csv', 'utf-8');

const rows = csv.split('\n').slice(1);

//store a specifc column for now ill just do col 17 (weapon)
const weapons = [];
const damage = [];
const armorDamage = [];

rows.forEach(row => {
    const columns = row.split(',');
    weapons.push(columns[16]);
    damage.push(columns[11]);
    armorDamage.push(columns[12]);

  });

console.log(weapons);
console.log(damage);
console.log(armorDamage);
  
