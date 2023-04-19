const fs = require('fs');

const csv = fs.readFileSync('data/newdata.csv', 'utf-8');

const rows = csv.split('\n').slice(1);

//store a specifc column for now ill just do col 17 (weapon)
const weapons = [];

rows.forEach(row => {
    const columns = row.split(',');
    weapons.push(columns[16]);
  });

  console.log(weapons);