// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    'Enter your description here:',
    'Enter your installation instructions here:',
    'Enter your usage information here:',
    'Enter your contribution guidelines here:',
    'Enter your testing instructions here:',
    'Select the license you are using for your application:',
    'Enter your GitHub username:',
    'Enter your email address:'
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('success');
    });
}

// Function to initialize app with question prompts
function init() {
    inquirer.prompt([
        {
            name: 'description',
            message: questions[0],
            type: 'input'
        },
        {
            name: 'installation',
            message: questions[1],
            type: 'input'
        },
        {
            name: 'usage',
            message: questions[2],
            type: 'input'
        },
        {
            name: 'contribution',
            message: questions[3],
            type: 'input'
        },
        {
            name: 'testing',
            message: questions[4],
            type: 'input'
        },
        {
            name: 'license',
            message: questions[5],
            type: 'rawlist',
            choices: [
                'test1',
                'test2',
                'test3'
            ]
        },
        {
            name: 'username',
            message: questions[6],
            type: 'input'
        },
        {
            name: 'email',
            message: questions[7],
            type: 'input'
        }
    ]).then(response => {
        // TODO: Update with appropriate code to execute
        console.log(response);
    });
}

// Function call to initialize app
init();
