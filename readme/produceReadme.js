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

  const problems = readdirSync(join(process.cwd(), 'problems'), { withFileTypes: true }).filter((dirent) => dirent.isDirectory());
  const modules = await Promise.all(problems.map(async ({ name }) => {
    const {
      default: {
        dateCompleted, runtime, memory, problemURL,
      },
    } = await import(join(process.cwd(), 'problems', name, 'index.js'));
    return {
      name: name.replaceAll('-', ' '),
      dateCompleted: dateCompleted?.toLocaleString('en-us', { dateStyle: 'long' }),
      runtime,
      memory,
      problemURL,
    };
  }));
  const completed = modules.filter(({ dateCompleted }) => dateCompleted);
  const incomplete = modules.filter(({ dateCompleted }) => !dateCompleted);

  if (completed.length) {
    README += NEW_LINE;
    README += '## Completed';
    README += NEW_LINE;
    README += '| Problem | Date completed | Runtime (% faster than others) | Memory (% less than others) |\n';
    README += '| ------- | -------------- | ------------------------------ | --------------------------- |\n';
    completed.forEach(({
      dateCompleted,
      runtime,
      memory,
      problemURL,
      name,
    }) => {
      README += `| [${name}](${problemURL}) | ${dateCompleted} | ${runtime} | ${memory} |\n`;
    });
  }

  if (incomplete.length) {
    README += NEW_LINE;
    README += '## Incomplete';
    README += NEW_LINE;
    incomplete.forEach(({ problemURL, name }) => {
      README += `[${name}](${problemURL})`;
      README += NEW_LINE;
    });
  }
  return README;
};

(async () => {
  const README = await getReadmeContent();
  writeFileSync(join(process.cwd(), 'README.md'), README);
})();
