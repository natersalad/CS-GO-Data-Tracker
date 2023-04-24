import { readFileSync, writeFileSync } from 'fs';

const data = {};

const contents = readFileSync('data/newdata.csv', 'utf8');

const rows = contents.trim().split('\n');
const headers = rows[0].split(',');

rows.slice(1).forEach((row) => {
  const cols = row.split(',');
  const key = cols[2];

  if (!data[key]) {
    data[key] = [headers.join(',')]; // Add headers to the array
  }
  data[key].push(row); // Add the row to the array
});

for (const key in data) {
  const fileName = `${key}.csv`; // Create a new filename for each key
  const fileData = data[key].join('\n'); // Join rows with a newline
  writeFileSync(fileName, fileData); // Write the CSV file
}

console.log('Done!');
