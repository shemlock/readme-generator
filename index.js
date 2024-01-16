/* 
PSEUDOCODE
1 Come up with README file default structure
2 Decide Q's Format eg select box (this would 
  good for the license Q), text input  etc 
3 Generate the README.md content based on the user input
4 Write to README file 
5 Name the README file something else so the README file you do about 
  this project for bootcamp doesn't overwrite it 
*/

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
          {
            type: 'input',
            name: 'username',
            message: 'What\'s your github username?'
          },
          {
            type: 'input',
            name: 'email',
            message: 'What\'s your email address?',
          },
          {
            type: 'input',
            name: 'title',
            message: 'What\'s the title of your project?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description for your project, explaining the what, why and how.',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project?',
            default: 'Run the command npm init',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for using your project',
          },  
          {
            type: 'checkbox',
            name: 'license',
            message: 'Which license do you want your project to have? Use arrow up and down keys to navigate and press spacebar to select',
            choices: ['MIT', 'Apache', 'Boost','Perl', 'Mozilla','None']
          },  
          {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to this project?',
            default: 'Contributions to this project are welcome',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'No tests at this time'
          },
          {
            type: 'input',
            name: 'credit',
            message: 'List your collaborators, if any?',
          },
          {
            type: 'input',
            name: 'feature',
            message: 'List your project features',
          },
        ]

// Function to write README file

function writeToFile(fileName, data) {
  const filePath = path.join(__dirname, 'examplereadme.md');

  fs.writeFile(filePath,data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('examplereadme.md created successfully.');
    }
  });
}

// Function to initialize the program

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      // Generate README content using the user answers
      const markdownContent = generateMarkdown(answers);
      // Write the generated content to the README.md file
      writeToFile('examplereadme.md', markdownContent);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Function call to initialize the program

init();
