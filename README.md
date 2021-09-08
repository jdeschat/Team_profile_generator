# Team_profile_generator

  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This project required building a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Tests were written for each part of the code using Jest to ensure that it passes all of them.

When prompted for team members and their information, then an HTML is generated that displays a nicely formatted team roster based on user input.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## Installation

To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Inquirer must then be installed by entering ```npm install inquirer```. Finally, the program can then be run by entering ```node develop/index.js``` into the command line, and answering each question appropriately.

```JavaScript
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
```
 
## Usage
Inquirer is easiest to use when installed with npm:  ``` npm install inquirer ```. Then you can load the module into your code with a require call: ``` const inquirer = require(‘inquirer’); ```
1. Enter management information
2. You will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application
3. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end the application
4. Once you end the application, your software team will be generated in an HTML file

## License
This application is rendered under MIT

## Contributors
To contribute to Team_profile_generator, clone this repo locally and commit your code on a separate branch.
  
Contributors:

<a href="https://github.com/jdeschat/Team_profile_generator/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=jdeschat/Team_profile_generator" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Path
- Jest

## Questions
My Github username is jdeschat, which can be accessed here https://github.com/jdeschat/Team_profile_generator.

The Github page for this project can be accessed using the following link: https://jdeschat.github.io/Team_profile_generator/.

You can reach me at jdeschat@gmail.com with additional questions.
  
Below are links to my demo video and the video location on my Github, respectfully:
- [Link to Demo Video](https://youtu.be/bJY3KfM77pc)
- [Video location in Github](https://github.com/jdeschat/Team_profile_generator/tree/main/assets/video)