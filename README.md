# Team_profile_generator

  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This project required building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Tests were written for each part of the code and 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Inquirer must then be installed by entering ```npm install inquirer```. Finally, the program can then be run by entering ```node develop/index.js``` into the command line, and answering each question appropriately.

  `/`/`JavaScript

  npm install inquirer

  var inquirer = require('inquirer');
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
 `/`/`
 
  ## Usage
  Inquirer is easiest to use when installed with npm:  ``` npm install inquirer ```. Then you can load the module into your code with a require call: ``` const inquirer = require(‘inquirer’); ```

  ## License
    This application is rendered under MIT

  ## Contributors
  To contribute to Professional-README-generator, clone this repo locally and commit your code on a separate branch.
  

  Contributors:

<a href="https://github.com/jdeschat/Team_profile_generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jdeschat/Team_profile_generator" />
</a>

Made with [contributors-img](https://contrib.rocks).

  ## Tests
  ![GitHub license](https://img.shields.io/badge/test-100%25-success)

  ## Questions
  My Github username is jdeschat, which can be accessed here https://github.com/jdeschat/Team_profile_generator.

  The Github page for this project can be accessed using the following link: https://jdeschat.github.io/Team_profile_generator/.

  You can reach me at jdeschat@gmail.com with additional questions.
  
  Below are links to my demo video and the video location on my Github, respectfully:
  - [Link to Demo Video](https://www.youtube.com/)
  - [Video location in Github](https://github.com/jdeschat/Team_profile_generator/tree/main/assets/video)