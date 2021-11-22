const inquirer = require('inquirer')
const fs = require('fs')

const questions = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username? (required)',
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

questions()
