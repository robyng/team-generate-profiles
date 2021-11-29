const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site.js');
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')
//const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager.js')

// EMPTY array to push team members into
const teamArray = [];

function init() {


    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What employee would you like to add next? If finished press finish.",
            choices: ["Manager", "Engineer", "Intern", "Finished"]
        }
    ])





        // manager what is your name
        // do you want to add engineer, intern 
        // make separate functions for each type of employee
        // push to array, use function
        // use array for html generation
        // 5 functions generate html, ask what to do next add or exit, ask about engineer, ask about interns, ask about manager
        //selectPrompt()
        .then((answers) => {
            switch (answers.role) {
                case "Manager":
                    managerPrompt();
                    break;
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern":
                    internPrompt();
                    break;
                case "Finished":
                    finishTeam();
                    break;
            }
        })



    const managerPrompt = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?",
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is their office number?",
            }
        ])
            .then((answers) => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
                teamArray.push(manager)
                console.log(teamArray);
                init()
            })

    }

    const engineerPrompt = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is their github username?",
            }
        ])
            .then((answers) => {
                
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                teamArray.push( engineer )
                init()
            })
    }


    const internPrompt = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is their school?",
            }
        ])
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                teamArray.push(intern)

                init()
            })
            // .then(teamData => {
            //     return generatePage(teamData);
            //   })
            //   .then(pageHTML => {
            //     return writeFile(pageHTML);
            //   })

    }


    const finishTeam = () => { 
                    const teamPage = generatePage(teamArray);
                   
                    writeFile(teamPage);
                    console.log("Finished! Check out Team Profile's index.html in dist/ folder.")

                  }

    }
    



init()



