const inquirer = require('inquirer');
const express = require('express');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var manager;
var engineers = []; 
var interns = [];

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

function addTeamMembers() {
    //TODO: Add code for new questions, which loop
    console.log("Ready to ask team member questions!");
}

function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        var inputManager = new Manager(
            answers.managerOfficeNumber,
            answers.managerName,
            answers.managerId,
            answers.managerEmail
            )
        console.log(inputManager);
        manager = inputManager;
        addTeamMembers();
    });
}

init();