const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const getBadgeURL = (summary, key) => {
  const { pct } = summary.total[key];

  // https://shields.io/category/coverage
  const coverage = `${pct}${encodeURI('%')}`;
  let color = 'red';
  if (pct === 100) {
    color = 'brightgreen';
  } else if (pct > 80) {
    color = 'yellow';
  }
  const url = `https://img.shields.io/badge/${key}-${coverage}-${color}?logo=jest`;
  return url;
};

const summaryPath = join(process.cwd(), 'coverage', 'coverage-summary.json');
const summary = JSON.parse(readFileSync(summaryPath, 'utf8'));
const summaryKeys = ['lines', 'statements', 'functions', 'branches'];

const NEW_LINE = '  \n';
let README = '';

summaryKeys.forEach((key) => {
  README += `[](${getBadgeURL(summary, key)}) `;
});
README += NEW_LINE;
README += readFileSync(join(process.cwd(), './readme/README.body.md')).toString();

writeFileSync(join(process.cwd(), 'README.md'), README);
