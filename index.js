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
      type: 'list',
      name: 'badge',
      message: `What license should be used for this file?`,
      choices: ["Mozilla", "Apache", "BSD", "MIT"],
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
      name: 'username',
      message: `What's your GitHub username?`,
    },
    
  ])
  .then((response) => {
    console.log(response);

    let badgeIcon = response.badge;
    let badgeLink;

    switch(badgeIcon){
      case "Mozilla":
        badgeIcon ="MPL%202.0";
        badgeLink = "MPL-2.0";
        break
      case "Apache":
        badgeIcon = "Apache%202.0";
        badgeLink = "Apache-2.0";
        break
      case "BSD":
        badgeIcon = "BSD%203--Clause";
        badgeLink = "BSD-3-Clause";
        break
      case "MIT":
        badgeIcon = "MIT";
        badgeLink = "MIT";
        break
    };
    console.log(badgeIcon);
    console.log(badgeLink);

    const readMeString = `# ${response.projectName}
  [![Badge](https://img.shields.io/badge/License-${badgeIcon}-blue.svg)](https://opensource.org/licenses/${badgeLink})

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

  Please click the following [link](https://opensource.org/licenses/${badgeLink}) for more details.

  ## Contributing Guidelines
    
  ${response.contributing}

  ## Tests

  ${response.tests}

  ## Questions
  Should you need to contact me, please visit my GitHub Account at https://github.com/${response.username}/
    
    
  `
    fs.writeFile('README.md', readMeString, 'utf8', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
