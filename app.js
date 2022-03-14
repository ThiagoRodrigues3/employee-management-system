//dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const figlet = require("figlet");

//figleting the APP Name
figlet("Employee \n \n Manager", (err, data) => {
    if (err) throw err;
    console.log(data);
})

//database connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_management_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log('connection established!');
    start();
});

// Main Function that calls all other functions to add Departments roles employees, View them and update them as well
function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update employee role",
            "Exit"
        ]
    }).then((answer) => {
        switch (answer.action) {
            case "View all departments":
                viewDepartments();
                break;

            case "View all roles":
                viewRoles();
                break;

            case "View all employees":
                viewEmployees();
                break;

            case "Add a department":
                addDepartment();
                break;

            case "Add a role":
                addRole();
                break;

            case "Add an employee":
                addEmployee();
                break;

            case "Update employee role":
                update();
                break;

            case "Exit":
                connection.end();
                break;
        }
    });
}

// Functions that are called above


// View all departments
function viewDepartments() {
    connection.query("SELECT * FROM department", (err, data) => {
        if (err) throw err;
        console.log("Displaying Departments:");
        console.table(data);
        start();
    });
}

//View all roles
function viewRoles() {
    connection.query("SELECT * FROM role", (err, data) => {
        if (err) throw err;
        console.log("Displaying Roles:");
        console.table(data);
        start();
    });
}

//View all employees
function viewEmployees() {
    connection.query("SELECT * FROM employee", (err, data) => {
        if (err) throw err;
        console.log("Displaying Employees:");
        console.table(data);
        start();
    });
}

//Add a department
function addDepartment() {
    inquirer.prompt([
        {
            name: "department",
            type: "input",
            message: "What is the New Departments Name?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    console.log("Please Enter Department Name.");
                }
            }
        },
    ]).then(answer => {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.department
            },
            (err) => {
                if (err) throw err;
                console.log(`${answer.department} has been added to Departments!`);
                start();
            }
        );
    });
}
