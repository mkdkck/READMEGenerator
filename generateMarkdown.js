// a function to transform the license choosen to the badge with a link of further description of the license.
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      licenseBadge = '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'Apache-2.0' :
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'GPL-V3' :
      licenseBadge = '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'BSD-3-Clause' :
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'None' :
      licenseBadge = ''
      break;
  }
  return licenseBadge;
}

// a function to transform the license choosen to a link that give further information about the license.
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT'
      break;
    case 'Apache-2.0' :
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'GPL-V3' :
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
      break;
    case 'BSD-3-Clause' :
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
      break;
    case 'None' :
      licenseLink = ''
      break;
  }
  return licenseLink;
}

// a function to generate a professional Readme markdown with the variables typed in.
function generateMarkdown({title,description,installation,usage,contribution,test,license,github,contact}) {
  return `# ${title}

## Description
${renderLicenseBadge(license)}

${description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
Here is a detail instruction of how to install this application:

${installation}

## Usage
This application can be used in the following scenario(s):

${usage}

## License
The application is covered under license: ${license}. 

Here is more information about this license:

${renderLicenseLink(license)}

## Contribution
You can contribute to this application by: 

${contribution}

## Tests
Here is a way to test this application:

${test}

## Questions
If you want to know more about this application, you can view the owner Github Profile via:

  https://github.com/${github}

for further more questions, you can also contact the owner via the following contact detail(s):

  ${contact}
`
}

module.exports = generateMarkdown;