// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    'Enter your project title here:',
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
            name: 'title',
            message: questions[0],
            type: 'input'
        },
        {
            name: 'description',
            message: questions[1],
            type: 'input'
        },
        {
            name: 'installation',
            message: questions[2],
            type: 'input'
        },
        {
            name: 'usage',
            message: questions[3],
            type: 'input'
        },
        {
            name: 'contributing',
            message: questions[4],
            type: 'input'
        },
        {
            name: 'testing',
            message: questions[5],
            type: 'input'
        },
        {
            name: 'license',
            message: questions[6],
            type: 'rawlist',
            choices: [
                'Academic Free License v3.0',
                'Educational Community License v2.0',
                'ISC License',
                'Microsoft Public License',
                'MIT License',
                'PostgreSQL License'
            ]
        },
        {
            name: 'username',
            message: questions[7],
            type: 'input'
        },
        {
            name: 'email',
            message: questions[8],
            type: 'input'
        }
    ]).then((response) => writeToFile('README.md', generateMarkdown(response)));
}

// Function call to initialize app
init();
