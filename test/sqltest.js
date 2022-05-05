const express = require('express');
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'em2kej.home.com',
  user: 'HOG',
  password: 'nagari',
  database: 'jk',
});

app.get('/db', (req, res) => {
  //todo db connet and dml
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query(
      'SELECT ID, Name, ReserveDate, RoomNum FROM Test',
      function (error, results, fields) {
        // When done with the connection, release it.
        console.log('why');
        res.send(JSON.stringify(results));
        console.log('result : ', results);

        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
      }
    );
  });
});

const server = app.listen(3000, () => {
  console.log('Server is running (localhost: 3000)');
});
