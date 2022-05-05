const util = require("util"),
    Promise = require("bluebird");
const Pool = require('../pool');
const sql1 = "update Test set ReserveDate = now() where id ='1'";

const pool = new Pool();

Promise.using( pool.connect(), conn =>{
        conn.queryAsync(sql1, (err, res)=>{
            util.log("sql1>>>> ", res.affectedRows);
        });
    });