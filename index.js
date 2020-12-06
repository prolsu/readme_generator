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
      name: 'installation',
      message: `What's the process to install this App?`,
    },
    {
      type: 'input',
      name: 'usage',
      message: `What is a suggested use for this App?`,
    },
    {
      type: 'input',
      name: 'license',
      message: `Is there a license to include to this App?`,
    },
    {
      type: 'input',
      name: 'contributing',
      message: `What are the guidelines to contributing to this App?`,
    },
    {
      type: 'input',
      name: 'tests',
      message: `Is there any tests to run for this App?`,
    },
    {
      type: 'input',
      name: 'questions',
      message: `Where should you be contacted for questions regarding the App?`,
    },
    
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

    ${response.installation}

  ## Usage

    ${response.usage}

  ## License

    ${response.license}

  ## Contributing Guidelines
    
    ${response.contributing}

  ## Tests

    ${response.tests}

  ## Questions

    ${response.questions}
    
  `
    fs.writeFile('README.md', readMeString, 'utf8', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
