const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: `What's the title of your project?`,
    },
    {
      type: 'input',
      name: 'description',
      message: `What's a description for this project?`,
    },
    {
      type: 'input',
      name: 'projectName',
      message: `What's the title of your project?`,
    },
    // {
    //   type: 'checkbox',
    //   message: 'Which of the following should be part of your "Table of Contents"?',
    //   name: 'stack',
    //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
  ])
  .then((response) => {
    console.log(response);
   
    const readMeString = `# ${response.projectName}

  ## Description
    
    ${response.description}

  ## Table of contents
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing Guidelines](#Contributing-Guidelines)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation



  ## Usage


  
  
  ## License


  
  
  ## Contributing Guidelines


  
  
  ## Tests


  
  
  ## Questions


  
  
    
  `

    fs.writeFile('README.md', readMeString, 'utf8', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
