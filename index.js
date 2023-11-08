let inquirer = require ('inquirer');
const { writeFile } = require('fs').promises;


const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please descript your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How to install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How to use this application?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to improve this application?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'How to test this application?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license you want to use for this application?',
        choices: []
      },
      
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username to create a link to your GitHub profile:',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'Please enter the contact detail for the user to reach you:',
      },
    ]);
  };
  

  const generateHTML = ({itle,description,installation,usage,contributing,test,license,github,contact }) =>
  `
  
  
  
  
  
  `

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

