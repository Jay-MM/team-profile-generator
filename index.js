const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateContent = require('./src/generateContent')

const teamMembers = [];

function next(){
    inquirer.prompt([{
        name: 'nextPrompt', 
        type: 'list',
        message: 'Choose another team member to join this team from the following list: ',
        choices: ['Engineer', 'Intern', 'No thanks, I am satisfied with this team']
    }])
    .then(function (answer) {
        if(answer.nextPrompt == 'Engineer')
        { 
            engineerPrompt();
        }
        if(answer.nextPrompt == 'Intern'){           
            internPrompt();
        }
        if(answer.nextPrompt == 'No thanks, I am satisfied with this team')
        {
            buildHtml();
        }
    })
}

function managerPrompt(){
    inquirer.prompt([{
            name:'name',
            type:'input',
            message:'What is the name of the manager who will lead this team? ',
        },
        {
            name:'id',
            type:'input',
            message:'Please enter the employee id of the manager: ',
        },
        {
            name:'email',
            type:'input',
            message:'What is the email of this employee? '
        },
        {
            name:'officeNumber',
            type:'input',
            message: 'Please enter the office number of the manager: '
        },
    ])
    .then(answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);

        teamMembers.push(manager); 
        console.log(manager); 
        next();
    })
}

function engineerPrompt(){
    inquirer.prompt([{
            type:'input',
            name:'name',
            message:'What is the engineer\'s name? ',
        },
        {
            type:'input',
            name:'id',
            message:'Please enter the employee id of the engineer: ',
        },
        {
            name:'email',
            type:'input',
            message:'What is the email of this employee? '
        },
        {
            type:'input',
            name:'github',
            message:'What is the github username of this engineer? ',
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

        teamMembers.push(engineer); 
        console.log(engineer); 
        next();
    })
    
}

function internPrompt(){
    inquirer.prompt([{
            type:'input',
            name:'name',
            message:'What is the intern\'s name? ',
        },
        {
            type:'input',
            name:'id',
            message:'Please enter the employee id of the intern: ',
        },
        {
            type:'input',
            name:'email',
            message:'What is the email of this employee? '
        },
        {
            type:'input',
            name:'school',
            message:'What school did this intern attend?: ',
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);

        teamMembers.push(intern); 
        console.log(intern); 
        next();
    })
}
function buildHtml() {
    fs.writeFileSync('./dist/index.html',generateContent(teamMembers),'utf-8')
}

console.log (teamMembers)
managerPrompt();
