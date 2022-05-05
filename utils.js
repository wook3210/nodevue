const ogs = require('open-graph-scraper'),
  HashMap = require('hashmap'),
  Crypto = require('crypto-js'),
  SHA256 = require('crypto-js/sha256');

// 유틸성은 정적으로 만들어 익스포트
module.exports = {
  ogsinfo(url, fn) {
    return ogs({ url: url }, (err, res) => {
      fn(err, res);
    });
  },
};
