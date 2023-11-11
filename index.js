const inquirer = require ('inquirer');
const generateMarkdown = require ('./generateMarkdown.js');
const { writeFile } = require('fs').promises;

// inquirer sections of questions creating vaiables for readme.md
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please give a title to your application:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write some description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please give an instruction of how to install your application:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Where to use this application?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please specify the contribution guildlines:',
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


// function to write the readme file.
function init() {
  questions()
    .then((data) =>
      writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

init();

