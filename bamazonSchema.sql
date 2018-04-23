DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(6,2) NULL,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Headphones", "Technology", 350.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 6s Case", "Accessories", 19.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Pods", "Technology", 156.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung TV", "Technology", 470.50, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Garmin GPS", "Technology", 145.00, 220);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple Charger", "Technology", 34.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flip Flops", "Shoes", 10.99, 900);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Air Force 1's", "Shoes", 100.00, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Air Force 1's", "Shoes", 100.00, 450);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Avocado", "Grocery", 1.45, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("85% Dark Chocolate", "Grocery", 10.99, 35);