const { join } = require('path');
const { readFileSync, writeFileSync, readdirSync } = require('fs');

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

const getReadmeContent = async () => {
  const summaryPath = join(process.cwd(), 'coverage', 'coverage-summary.json');
  const summary = JSON.parse(readFileSync(summaryPath, 'utf8'));
  const summaryKeys = ['lines', 'statements', 'functions', 'branches'];

  const NEW_LINE = '  \n';
  let README = '';

  summaryKeys.forEach((key) => {
    README += `![Code coverage: ${key}](${getBadgeURL(summary, key)} "${key}") `;
  });
  README += NEW_LINE;
  README += readFileSync(join(process.cwd(), './readme/README.body.md')).toString();
  README += NEW_LINE;
  README += '# Problems';
  README += NEW_LINE;

  const problems = readdirSync(join(process.cwd(), 'problems'), { withFileTypes: true }).filter((dirent) => dirent.isDirectory());

  await Promise.all(problems.map(async ({ name }) => {
    const module = await import(join(process.cwd(), 'problems', name, 'index.js'));
    const {
      runtime,
      memory,
      problemURL,
      dateCompleted,
    } = module.default;
    README += `## [${name.replaceAll('-', ' ')}](${problemURL})`;
    if (dateCompleted) {
      README += NEW_LINE;
      README += `**Date completed:** ${dateCompleted.toLocaleString('en-us', {
        dateStyle: 'long',
      })}`;
      README += NEW_LINE;
      README += `**Runtime:** better than ${runtime}% of other JS submissions`;
      README += NEW_LINE;
      README += `**Memory:** better than ${memory}% of other JS submissions`;
    } else {
      README += ' (Incomplete)';
    }
    README += NEW_LINE;
  }));

  return README;
};

(async () => {
  const README = await getReadmeContent();
  writeFileSync(join(process.cwd(), 'README.md'), README);
})();
