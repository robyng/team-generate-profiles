// create page
const generatePage = teamArray => {
    if (!teamArray) {
      return '';
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
    
        <div class="manager section">
            <h3 class="title">
                Managers
            </h3>
            <div class="columns">
                <div class="column">
                    <ul>
                        <li>Name: ${teamArray[0].name}</li>
                        <li>ID: 2</li>
                        <li>Email: robyng@gmail.com</li>
                        <li>Office #: 101</li>
                    </ul>
                </div>
    
            </div>
        </div>
    
        <div class="engineers section">
            <h3 class="title">
                Engineers
            </h3>
            <div class="columns">
                <div class="column">
                    <ul>
                        <li>Name: Robyn</li>
                        <li>ID: 2</li>
                        <li>Email: robyng@gmail.com</li>
                        <li>Github: github.com/robyng</li>
                    </ul>
                </div>
    
            </div>
        </div>
        
        <div class="intern section">
            <h3 class="title">
                Interns
            </h3>
            <div class="columns">
                <div class="column">
                    <ul>
                        <li>Name: Robyn</li>
                        <li>ID: 2</li>
                        <li>Email: robyng@gmail.com</li>
                        <li>School: UC Berkeley</li>
                    </ul>
                </div>
    
            </div>
    
        </div>
    
            <footer class="footer">Copyright 2021 Robyn Graham</footer>
    </body>
    
    </html>
    `;
  };
  