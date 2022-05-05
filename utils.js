const ogs = require('open-graph-scraper'),
  HashMap = require('hashmap'),
  Crypto = require('crypto-js'),
  SHA256 = require('crypto-js/sha256');

const EKey = "node-vue-salt";
// 유틸성은 정적으로 만들어 익스포트
module.exports = {
  makeMap(key, value){
    const map = new HashMap();
    map.set(key,value);
    console.log("MAP>>>", map.get(key));
    return map;
  },
  //암호화
  encrypt(data, key) {
    return Crypto.AES.encrypt(data, key || EKey).toString();
  },
  //복호화
  decrypt(data,key){
    return Crypto.AES.decrypt(data, key || EKey).toString(Crypto.enc.Utf8);
  },

  //암호화 단방향
  encrytSha2(data, key){
    if(!data) return null;
    key = key || EKey;
    try{
      return Crypto.SHA256(data + key).toString();
    }catch(err){
      console.log(err);
    }
  },

  //링크 이미지 표시
  ogsinfo(url, fn) {
    return ogs({ url: url }, (err, res) => {
      fn(err, res);
    });
  },
};
