// create page
const generatePage = teamArray => {
    if (!teamArray) {
      return '';
    }
  let employeeCards = ''
  for (i=0; i<teamArray.length; i++) {
      if (teamArray[i].getRole() === "Manager"){
          employeeCards += `        <div class="manager section">
          <h3 class="title">
              Managers
          </h3>
          <div class="columns">
              <div class="column">
                  <ul>
                      <li>Name: ${teamArray[i].name}</li>
                      <li>ID: ${teamArray[i].id}</li>
                      <li>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                      <li>Office #:${teamArray[i].officeNum}</li>
                  </ul>
              </div>
  
          </div>
      </div>`
      } else if (teamArray[i].getRole() === "Engineer"){
        employeeCards += `<div class="engineers section">
        <h3 class="title">
            Engineers
        </h3>
        <div class="columns">
            <div class="column">
                <ul>
                    <li>Name: ${teamArray[i].name}</li>
                    <li>ID: ${teamArray[i].id}</li>
                    <li>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                    <li>Github: <a href ="https://github.com/${teamArray[i].github}" target="_blank">github.com/${teamArray[i].github}</a></li>
                </ul>
            </div>

        </div>
    </div>`

      } else {
          employeeCards += `
          <div class="intern section">
            <h3 class="title">
                Interns
            </h3>
            <div class="columns">
                <div class="column">
                    <ul>
                        <li>${teamArray[i].name}</li>
                        <li>ID: ${teamArray[i].id}</li>
                        <li>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                        <li>School: ${teamArray[i].school}</li>
                    </ul>
                </div>
    
            </div>
    
        </div>`
      }
  }
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <title>Engineering Team Profiles</title>
    </head>
    
    <body>
        <header class="section">
            <h1 class="title is-1">Engineering Team Profiles</h1>
        </header>
    
${employeeCards}
      
            <footer class="footer">Copyright 2021 Robyn Graham</footer>
    </body>
    
    </html>
    `;
  };
  
  module.exports = generatePage;
