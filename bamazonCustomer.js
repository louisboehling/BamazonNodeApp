var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    display();
  });

//displays all of the items for sale
function display() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("\n\n ITEMS FOR SALE: \n\n");
        console.log(res);
        console.log("\n\n");
        start();
      });
  };

//starts the questiosn using inquirer
function start() {
    inquirer
      .prompt([
        {
            type: "input",
            name: "id",
            message: "Please indicate the ID number of the item you would like to buy.",
            filter: Number,
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
          },{
			type: "input",
			name: "quantity",
            message: "How many do you want to purchase?",
            filter: Number,
			validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
		}
      ])
      .then(function(input) {
        
        console.log("\n You selected: \n id = " + input.id + "\n quantity = " + input.quantity);

        var item = input.id;
        var quantity = input.quantity;
        
        var queryStr = "SELECT * FROM products WHERE ?";

        connection.query(queryStr, {id: item}, function(err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log("\n This is not a valid item id. \n");
                
            }
            else {
               var productData = data[0];

               if (quantity <= productData.stock_quantity) {
                   console.log("\n Product in stock. Your order has been placed. Thank you for using Bamazon! \n");

                   var updateQuery = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE id = " + item;

                   connection.query(updateQuery, function(err, data) {
                      if (err) throw err;
                      connection.end();
                   })
               }
            }
        })    
      });

} 