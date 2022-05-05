const utils = require('../utils');

let url = 'https://kcar.com';

utils.ogsinfo(url, (err, res) => {
  //console.log(err, res);
});
let enc = utils.encrypt("jwj");
console.log("jwj encryto : " + enc);

console.log("jwj decryto : " + utils.decrypt(enc));

console.log("jwj encryto sha256 : " + utils.encrytSha2("jwj"));

let map = utils.makeMap("name", 777);
console.log("MAP>>>", map.get("name"));