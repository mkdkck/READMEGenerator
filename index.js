const inquirer = require ('inquirer');
const generateMarkdown = require ('generateMarkdown');
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
        choices: ['MIT',
          'Apache-2.0',
          'GPL-V3',
          'BSD-3-Clause',
          'None']
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
    ])
  };

function init() {
  questions()
    .then((title,description,installation,usage,contributing,test,license,github,contact) =>
      writeFile('README.md', generateMarkdown(title,description,installation,usage,contributing,test,license,github,contact)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

init();

