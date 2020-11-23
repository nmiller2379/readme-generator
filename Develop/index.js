// connect to external modules
const fs = require("fs")
const inquirer = require("inquirer")
const util = require("util")
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const promptUser = () =>
inquirer.prompt([
    {
        type: "input",
        message: "What is your project's name?",
        name: "title" 
    },
    {
        type: "input",
        message: "What is the decription of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license.",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public LIcense 2.0", "Apache License 2.0", "MIT License", "Boost Softwar License 1.0", "None"]
    },
    {
        type: "input",
        message: "What command should be run to install dependents?",
        name: "installation"  
    },
    {
        type: "input",
        message: "What command be run to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user need to know about using this repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to this repo?",
        name: "contributions"
    }
]);

// function to write README file
promptUser()
    .then((data) => writeFileAsync("README.md", generateMarkdown(data)))
    .then(() => console.log("Successfully generated README file."))
    .catch((err) => console.error(err));