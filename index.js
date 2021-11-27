const inquirer = require('inquirer')
const fs = require('fs')

const questions = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employee-name',
            message: 'What is your name? (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {

                    return false;
                }
            }
        }
    ])
}

// manager what is your name
// do you want to add engineer, intern 
// make separate functions for each type of employee
// push to array, use function
// use array for html generation
// 5 functions generate html, ask what to do next add or exit, ask about engineer, ask about interns, ask about manager
questions()
