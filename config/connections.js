const mysql = require("mysql");

const database = mysql.createConnection({
	host: "localhost",
	user: " ", //add your MySQL username here or 'root'
	password: " ", //add your MySQL password here
	database: "employee_db",
});

module.exports = database;
