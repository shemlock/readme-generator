// function to generate markdown for README
function generateMarkdown(data) {

  //for the license section
  let licenseBadge = '';

  data.license.forEach(license => {
    let badgeURL = '';
    let licenseURL = '';

    switch (license) {
      case 'MIT': 
        badgeURL = 'https://img.shields.io/badge/License-MIT-blue.svg';
        licenseURL = 'https://opensource.org/licenses/MIT';
        break;
      case 'Apache':
        badgeURL = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
        licenseURL = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'Boost':
        badgeURL = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
        licenseURL = 'https://www.boost.org/LICENSE_1_0.txt';
        break;
      case 'Perl':
        badgeURL = 'https://img.shields.io/badge/License-Perl-0298c3.svg';
        licenseURL = 'https://opensource.org/licenses/Artistic-2.0';
        break;
      case 'Mozilla':
        badgeURL = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
        licenseURL = 'https://opensource.org/licenses/MPL-2.0';
        break;
      case 'None':
        'No License selected for this project'
        break;
    }

    if (badgeURL && licenseURL) {
      licenseBadge += `![${license} License](${badgeURL})\n\n`;
      licenseBadge += `This project is licensed under the [${license} License](${licenseURL}).\n`;
    }
  });

  return `# ${data.title} 

## Description
  ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install this project please: ${data.installation}

## Usage
${data.usage}

## Credits
${data.credit}

## License
${data.license}

${licenseBadge}

## Features
${data.feature}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to contact me at ${data.email}. You can also visit my GitHub profile: [${data.username}](https://github.com/${data.username}).
`
}

module.exports = generateMarkdown;
