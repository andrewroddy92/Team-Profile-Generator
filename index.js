const inquirer = require('inquirer');
const express = require('express');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var manager;
var engineers = []; 
var interns = [];

const employeeSelection = [{
    type: 'list',
    name: 'employeeType',
    message: 'Which type of employee would you like to add?',
    choices: ['Manager', 'Engineer', 'Intern', 'None'],
}]


const managerQuestions = [{
        type: 'input',
        name: 'managerName',
        message: 'Manager Name:',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Manager Employee ID:',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Manager Email:',
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Manager Office Number:',
    },
]

const engineerQuestions = [{
    type: 'input',
    name: 'engineerName',
    message: 'Engineer Name:',
},
{
    type: 'input',
    name: 'engineerId',
    message: 'Engineer Employee ID:',
},
{
    type: 'input',
    name: 'engineerEmail',
    message: 'Engineer Email:',
},
{
    type: 'input',
    name: 'engineerGithub',
    message: 'Engineer Github Username:',
},
]

const internQuestions = [{
    type: 'input',
    name: 'internName',
    message: 'Intern Name:',
},
{
    type: 'input',
    name: 'internId',
    message: 'Intern Employee ID:',
},
{
    type: 'input',
    name: 'internEmail',
    message: 'Intern Email:',
},
{
    type: 'input',
    name: 'internSchool',
    message: 'Intern School:',
},
]

function addManager() {
    inquirer.prompt(managerQuestions).then((managerAnswers) => {
        manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber)
        init()
    });
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        var engineer = new Manager(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub)
        engineers.push(engineer);
        init()
    });
}

function addIntern() {
    inquirer.prompt(internQuestions).then((internAnswers) => {
        var intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internOfficeNumber)
        interns.push(intern);
        init()
    });
}

function init() {
    inquirer.prompt(employeeSelection).then((answers) => {
        switch (answers.employeeType){
            case 'Manager':
                addManager()
                break       
            case 'Engineer': 
                addEngineer()
                break
            case 'Intern':
                addIntern()
                break
            case 'None': 
                console.log('tallboy')
                break
                 
        }
    });
}

init();