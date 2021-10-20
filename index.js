const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const fs = require('fs')

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
        var engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub)
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

function writeHtmlFile() {
    //Make HTML String -- will probably need loops through the arrays
    var htmlString = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./styles.css">
        <title>Document</title>
    </head>
    <body>
        <header class="header">My Team</header>
        <div class="container">
            <div class="row">`
    
    if (manager != null) {
        htmlString = htmlString + `<div class="col">
            <div class="card shadow bg-white rounded">
                <div class="card-head">
                    <h1>`+manager.getName()+`</h1>
                    <h2>Manager</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: `+manager.getId()+`</li>
                        <li class="list-group-item">Email: <a href="mailto:`+manager.getEmail()+`">`+manager.getEmail()+`</a></li>
                        <li class="list-group-item">Office Number: `+manager.getOfficeNumber()+`</li>
                    </ul>
                </div>
            </div>
        </div>`
    }
        //Loop through engineers array to add engineers
    if (engineers.length > 0) {
        for (i = 0; i < engineers.length; i++) {
            htmlString = htmlString + `<div class="col">
            <div  class="card shadow bg-white rounded">
                <div class="card-head">
                    <h1>`+engineers[i].getName()+ `</h1>
                    <h2>Engineer</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: `+engineers[i].getId()+`</li>
                        <li class="list-group-item">Email: <a href="mailto:`+engineers[i].getEmail()+`">`+engineers[i].getEmail()+`</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/`+engineers[i].getGithub()+`">`+engineers[i].getGithub()+`</a></li>
                    </ul>
                </div>
            </div>
        </div>`
        }
    }
   //Loop though interns array to add interns
    if (interns.length > 0) {
        for (i = 0; i < interns.length; i++) {
            htmlString = htmlString + `<div class="col">
            <div  class="card shadow bg-white rounded">
                <div class="card-head">
                    <h1>`+interns[i].getName()+ `</h1>
                    <h2>Intern</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: `+interns[i].getId()+`</li>
                        <li class="list-group-item">Email: <a href="mailto:`+interns[i].getEmail()+`">`+interns[i].getEmail()+`</a></li>
                        <li class="list-group-item">School: `+interns[i].getSchool()+`</a></li>
                    </ul>
                </div>
            </div>
        </div>`
        }
    }
    //Finish up
    htmlString = htmlString + `</div></div></body></html>`
    //Write HTML String to file using fs
    fs.writeFile('dist/index.html', htmlString, function (err) {
        if (err) return console.log(err);
      })
}

function init() {
    inquirer.prompt(employeeSelection).then((answers) => {
        switch (answers.employeeType){
            case 'Manager':
                addManager();
                break       
            case 'Engineer': 
                addEngineer();
                break
            case 'Intern':
                addIntern();
                break
            case 'None': 
                writeHtmlFile();
                break
                 
        }
    });
}

init();