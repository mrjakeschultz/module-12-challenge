const inquirer = require("inquirer");

function optionsMain() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "mainOptions",
				message: "What would you like to do?",
				choices: [
					"View All Employees",
					"View All Employees By Department",
					"View All Employees By Manager",
					"Update Employee Manager",
					"View All Roles",
					"Add Role",
					"Remove Role",
					"View All Departments",
					"Add Department",
					"Remove Department",
					"EXIT DATABASE",
				],
			},
		])
		.then((answers) => {
            //handle answers from options
        }

        //add functions for all answers/options

        //QUIT function exits the app


