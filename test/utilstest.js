const utils = require('../utils');

let url = 'https://naver.com';

utils.ogsinfo(url, (err, res) => {
  console.log(err, res);
});
