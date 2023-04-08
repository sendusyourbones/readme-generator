// Object to link license name with URL
const licenseMappings = {
  'Academic Free License v3.0': 'afl-3-0-php',
  'Educational Community License v2.0': 'ecl-2-0',
  'ISC License': 'isc-license-txt',
  'Microsoft Public License': 'ms-pl-html',
  'MIT License': 'mit',
  'PostgreSQL License': 'postgresql'
}

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseForUrl = license.replaceAll(' ', '%20');

  return `![License badge](https://img.shields.io/badge/license-${licenseForUrl}-brightgreen)`;
}

// Function that returns sections with unmodified user input
function renderText(title, text) {
  return text ? `## ${title}\n${text}` : '';
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
    const currentHeader = headers[i];
    const lowercaseHeader = currentHeader.toLowerCase();
    if (data[lowercaseHeader] || (currentHeader === 'Questions' && (data.username || data.email))) {
      tableOfContents += `* [${currentHeader}](#${lowercaseHeader})\n`;
    }
  }

  return tableOfContents;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `[${license}](https://opensource.org/license/${licenseMappings[license]}/)`;
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
${renderText('Description', data.description)}
${renderTable(data)}
${renderText('Installation', data.installation)}
${renderText('Usage', data.usage)}
${renderText('Contributing', data.contributing)}
${renderText('Testing', data.testing)}
${renderText('License', renderLicenseLink(data.license))}
${renderQuestionSection(data.username, data.email)}`
}

module.exports = generateMarkdown;
