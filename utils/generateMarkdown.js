// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge = '';
  
  if (license) {
    const licenseForUrl = license.replaceAll(' ', '%20');
    licenseBadge = `![License badge](https://img.shields.io/badge/license-${licenseForUrl}-brightgreen)`;
  }

  return licenseBadge;
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
  let licenseSection = '';

  if (license) {
    licenseSection = `## License\n${renderLicenseLink(license)}`;
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}`
}

module.exports = generateMarkdown;
