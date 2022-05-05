const mysql = require("mysql"),
    util = require("util"),
    Promise = require("bluebird");

Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_INFO = {
    host: 'em2kej.home.com',
    user: 'HOG',
    password: 'nagari',
    database: 'jk',
    multipleStatements: true,
    connectionLimit: 10,
    waitForConnections: false,
};

//singleton
module.exports = class {
  construct(dbinfo){
      dbinfo = dbinfo || DB_INFO;
      this.pool = mysql.createPool(dbinfo);
  }
  connect(){
      return this.pool.getConnectionAsync().disposer(conn=>{
          return conn.release();
      });
  }
  end(){
      this.pool.end(err=>{
          util.log(">>>>>>>>>>>>>>> End of Pool!!");
          if (err){
              util.log("ERR pool ending!!");
          }
      });
  }
};