const fs = require('fs');

const csv = fs.readFileSync('data/newdata.csv', 'utf-8');

const rows = csv.split('\n').slice(1);

const weaponStats = [];

rows.forEach(row => {
    const columns = row.split(',');
    const weapon = columns[16];
    //we probably want the damage as ints so we can sort easier.
    const hpDamage = parseInt(columns[11]);
    const armorDamage = parseInt(columns[12]);
    const totalDamage = hpDamage + armorDamage;
    //we can add onto this, but I feel its smart to combine them all so we can access what weapon is associated with a sorted stat.
    //lowkey makes sense to make a Weapon object with the damage and such being parameters, but IDK how to do that in javascript :P.
    weaponStats.push([weapon, hpDamage, armorDamage, totalDamage]);

  });
  //this is here just to test, we can delete this later.
  console.log(weaponStats);
  
  
