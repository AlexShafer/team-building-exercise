const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

chooseRole()

function generateHTML() {
    console.log(teamMembers)
    fs.writeFileSync(outputPath, render(teamMembers)), (err) => {
        if (err) throw err;
        console.log("Team Created");
    }
};

function chooseRole() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "Finished"],
            default: "Employee"
        }
    ]).then(response => {
        console.log(response)
        if (response.role === "Manager") {
            createManager()
        } else if (response.role === "Engineer") {
            createEngineer()
        } else if (response.role === "Intern") {
            createIntern()
        } else if (response.role === "Finished") {
            generateHTML()
        }
    })
};

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Employee's ID Number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "officeNumber"
        }
    ]).then(function(response) {
        var newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(newManager);
        chooseRole()
    })
};

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Employee's ID Number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub Profile?",
            name: "github"
        }
    ]).then(function(response) {
        var newEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(newEngineer);
        chooseRole()
    })
};

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Employee's ID Number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Employee's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What school does the Intern attend?",
            name: "school"
        }
    ]).then(function(response) {
        var newIntern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(newIntern);
        chooseRole()
    })
};