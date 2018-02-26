var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Shalom!',
    database : 'anguSales'
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola');
});


// connection.connect();

// connection.query("SELECT * FROM anguSales.customers WHERE first_name LIKE 'jan%'", function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.' + err);
// });

// connection.end();

module.exports = router;