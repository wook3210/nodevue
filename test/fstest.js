const fs = require('fs');
const util = require('util');

fs.readFile(__dirname + '/test.json', 'utf-8', (err, data) => {
  if (err) return console.error(err);

  console.log('data>>', data);
});

let data2 = fs.readFileSync(__dirname + '/test.json', 'utf-8');
util.log('data2>>', data2);

util.log('-------');

fs.writeFile(__dirname + '/message.txt', data2, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
