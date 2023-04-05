// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge = '';
  
  if (license) {
    const licenseForUrl = license.replaceAll(' ', '%20');
    licenseBadge = `![License badge](https://img.shields.io/badge/license-${licenseForUrl}-brightgreen)`;
  }

  return licenseBadge;
}

// Function that returns the description section
function renderDescSection(description) {
  return description ? `## Description\n${description}` : '';
}

// Function to render table of contents
function renderTable(data) {
  const headers = [
    'Installation',
    'Usage',
    'Contributing',
    'Testing',
    'License',
    'Questions'
  ];

  if (!data) {
    return '';
  }

  let tableOfContents = '## Table of Contents\n';

  for (let i = 0; i < headers.length; i++) {
    const lowercaseHeader = headers[i].toLowerCase();
    if (data[lowercaseHeader] || (headers[i] === 'Questions' && (data.username || data.email))) {
      const entry = `* [${headers[i]}](#${lowercaseHeader})\n`;
      tableOfContents += entry;
    }
  }

  return tableOfContents;
}

// Function to render installation section
function renderInstSection(installation) {
  return installation ? `## Installation\n${installation}` : '';
}

// Function to render usage section
function renderUsageSection(usage) {
  return usage ? `## Usage\n${usage}` : '';
}

// Function that returns the license link
function renderLicenseLink(license) {
  let urlEnd = '';

  switch (license) {
    case 'Academic Free License v3.0':
      urlEnd = 'afl-3-0-php';
      break;
    case 'Educational Community License v2.0':
      urlEnd = 'ecl-2-0';
      break;
    case 'ISC License':
      urlEnd = 'isc-license-txt';
      break;
    case 'Microsoft Public License':
      urlEnd = 'ms-pl-html';
      break;
    case 'MIT License':
      urlEnd = 'mit';
      break;
    case 'PostgreSQL License':
      urlEnd = 'postgresql'
      break;
    default:
      return '';
  }

  return `[${license}](https://opensource.org/license/${urlEnd}/)`
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  return license ? `## License\n${renderLicenseLink(license)}` : '';
}

// Function to render contributing section
function renderContribSection(contributing) {
  return contributing ? `## Contributing\n${contributing}` : '';
}

// Function to render testing section
function renderTestingSection(testing) {
  return testing ? `## Testing\n${testing}` : '';
}

// Function to render questions section
function renderQuestionSection(username, email) {
  let questionSection = '';

  if (username || email) {
    questionSection = '## Questions\n';
    if (username) {
      questionSection += `- View my GitHub profile: [${username}](https://github.com/${username})\n`;
    }
    if (email) {
      questionSection += `- Email me at [${email}](mailto:${email})`;
    }
  }

  return questionSection;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderDescSection(data.description)}
${renderTable(data)}
${renderInstSection(data.installation)}
${renderUsageSection(data.usage)}
${renderContribSection(data.contributing)}
${renderTestingSection(data.testing)}
${renderLicenseSection(data.license)}
${renderQuestionSection(data.username, data.email)}`
}

module.exports = generateMarkdown;
