var inquirer = require("inquirer")
var fs = require("fs")
// array of questions for user
const questions = [
{
    type: "input",
    name: "github",
    message: "github username"
},
{
    type: "input",
    name: "email",
    message: "email address"
},
{
    type: "input",
    name: "title",
    message: "project title"
},
{
    type: "input",
    name: "description",
    message: "project description"
},
{
    type: "list",
    name: "license",
    message: "enter license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    name: "tests",
    message: "enter testing information",
    default: "npm test"
},
{
    type: "input",
    name: "install",
    message: "enter installation information",
    default: "npm i"
},
{
    type: "input",
    name: "usage",
    message: "enter usage information"
},
{
    type: "input",
    name: "contributors",
    message: "enter contributors information",
    default: "Frank"
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(tv){
console.log(tv)
var readmeText = `
# Title: ${tv.title}
## Author: ${tv.contributors}
## Github Link: [Github User Profile](https://github.com/${tv.github})
### License: ![Github License](https://img.shields.io/badge/license-${tv.license}-blue.svg)
#### Table of Contents: 
Instructions | Description 
--- | ---
Installation | ${tv.install}
Testing | ${tv.tests}
Usage | ${tv.usage}
### Project Description:  
${tv.description}

###### If you have any questions email me ${tv.email}
`
fs.writeFileSync("README.md", readmeText, function(){
    console.log("filegenerator", readmeText)
})

})
}

// function call to initialize program
init();
