const fs = require('fs');

const generateEngineer = (engineer) => {
    const cardBorderShadow = 'card shadow p-3 mb-5 bg-body-tertiary rounded'
    const cardHeaderColor = 'card-header bg-primary text-white';
    return `
        <div class="col">
            <div class="${cardBorderShadow}" style="width: 18rem;">
                <div class="${cardHeaderColor}">
                    <h4 class="bi bi-laptop-fill text-white">${engineer.name}</h4>
                    <p class="text-white">  Engineer</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" class="card-link">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    `
}

const generateIntern = (intern) => {
    const cardBorderShadow = 'card shadow p-3 mb-5 bg-body-tertiary rounded'
    const cardHeaderColor = 'card-header bg-primary text-white';
    return `
        <div class="col">
            <div class="${cardBorderShadow}" style="width: 18rem;">
                <div class="${cardHeaderColor}">
                    <h4 class="bi bi-laptop text-white">${intern.name}</h4>
                    <p class="text-white">  Intern</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${intern.email}">${intern.email}"</a></li>           
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    `
}

const generateManager = (manager) => {
    const cardBorderShadow = 'card shadow p-3 mb-5 bg-body-tertiary rounded'
    const cardHeaderColor = 'card-header bg-primary text-white';
    return `
        <div class="col">
            <div class="${cardBorderShadow}" style="width: 18rem;">
                <div class="${cardHeaderColor}">
                    <h5 class="bi bi-pc-display text-white">${manager.name}</h5>
                    <p class="text-white">  Manager</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `
}

const generateContent = (team) => {
    employeeRole = []
    console.log(team)
    for (let i = 0; i < team.length; i++) {
        const employee = team[i]
        const role = employee.getRole()

        if(role == 'Engineer') {
            const engineerCard = generateEngineer(employee)
            employeeRole.push(engineerCard)
        }

        if(role == 'Intern') {
            const internCard = generateIntern(employee)
            employeeRole.push(internCard)
        }

        if(role == 'Manager') {
            const managerCard = generateManager(employee)
            employeeRole.push(managerCard)
        }
    }

    const generatedRole = employeeRole.join('')
    const cardInfo = generatedContent(generatedRole)
    return cardInfo
}

const generatedContent = (generatedRole) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link href="./style.css" rel="stylesheet" >
        <title>Team Profile Generator</title>
    </head>
    <body class="m-2">
        <header class="bg-danger d-flex justify-content-center text-white mb-5 pt-4" style="height: 111px" >
            <h1>My Team</h1>
        </header>
        <main>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                ${generatedRole}
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}









module.exports = generateContent