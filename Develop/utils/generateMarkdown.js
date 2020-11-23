// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}

  ## Table of Contents

  ## Installation

  To install ncessary dependencies, run this command:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributions}

  ## Tests

  To run tests, use this command:

  ${data.test}

  ## Questions

  Anyone with questions about this repo can open an issue or contact me directly at ${data.email}. For more of my work, go to [${data.username}] (https://github.com/${data.username}/)

  ## License

  The license information for this project is:

  ${data.license}

`;
}

module.exports = generateMarkdown;
