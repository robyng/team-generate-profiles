const inquirer = require('inquirer')
const fs = require('fs')

// EMPTY array to push team members into
const teamArray = []; 


selectPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What employee would you like to add next? If finished press finish.",
            choices: ["Manager", "Engineer", "Intern", "Finished"]
        }
    ])
}

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
}



// manager what is your name
// do you want to add engineer, intern 
// make separate functions for each type of employee
// push to array, use function
// use array for html generation
// 5 functions generate html, ask what to do next add or exit, ask about engineer, ask about interns, ask about manager
selectPrompt()
   .then((answers) => {
         switch (answers.role) {
           case "Manager":
             managerPrompt();
             break;
    //        case "Engineer":
    //          console.log("WE NEED TO CREATE A ENGINEER");
    //          break;
    //        default:
    //          console.log("WE NEED TO CREATE A INTERN");
    //          break;
         }
       })     

   .then((answers) => {
         teamArray.push({ ...answers, memberRole: "Manager" })
         console.log(teamArray);
       });
//.then(selectPrompt)
// .then(answers => {
//     console.log(answers)
// })


