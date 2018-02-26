var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '******',
    database : 'anguSales'
  });
  // console.log(Person.get());

//////
connection.connect();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('new customer req')
  
  connection.query("SELECT * FROM anguSales.customers", function(err, rows, fields) {
    if (!err){
      res.send(JSON.stringify(rows))
      console.log(rows)
    }
    else
      console.log('Error while performing Query.' + err);
  });
  
});

router.post('/', (req, res) => {
  var customer = req.body.customer;

});

router.put('/:id', (req, res) => {
  
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id)

  connection.query("DELETE FROM anguSales.customers WHERE anguSales.customers.id = " + req.params.id , function(err, rows, fields) {
    if (!err){
      res.send(JSON.stringify(rows))
      console.log(rows)
    }
    else
      console.log('Error while performing Query.' + err);
  });
});


// connection.end()


module.exports = router;





