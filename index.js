const fs = require('fs-extra');

const data = fs.readJSONSync('mfin.json');
const textArr = data[0].text.map((arr) => {
   return arr.filter((x) => typeof x === 'string');
 });
const notTextArr = textArr.map((arr) => arr[0]);
console.log(JSON.stringify(notTextArr.join(' '), null, 2));
