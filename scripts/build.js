const fs = require('fs').promises;
const chalk = require('chalk');
const svgr = require('@svgr/core').default;
const camelCase = require('camelcase');
const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));

const log = console.log;

const generate = {
  react: async (svg, componentName) => {
    const component = await svgr(
      svg,
      { icon: true, typescript: true },
      { componentName }
    );
    return component;
  },
  // to be implemented
  vue: async () => {
    return;
  },
};

async function buildIcons(package) {
  let outDir = `./${package}`;

  await fs.mkdir(outDir, { recursive: true });

  const icons = await getAllIcons();

  log(chalk.cyan(`Generating ${package} icons...`));

  icons.map(async (icon) => {
    await fs.writeFile(
      `${outDir}/${icon.componentName}.tsx`,
      await generate[package](icon.svg, icon.componentName)
    );
  });

  const exports = icons
    .map((icon) => {
      return `export { default as ${icon.componentName} } from './${icon.componentName}'`;
    })
    .join('\n');

  log(chalk.cyan('Exporting icons...'));
  await fs.writeFile(`${outDir}/index.ts`, exports, 'utf8');
}

async function getAllIcons() {
  log(chalk.blue('Getting all icons...'));

  const files = await fs.readdir('./svg');

  return Promise.all(
    files.map(async (file) => ({
      svg: await fs.readFile(`./svg/${file}`, 'utf8'),
      componentName: camelCase(file.split('.')[0], { pascalCase: true }),
    }))
  );
}

async function main(package) {
  log(chalk.green(`Building ${package} icons package...`));

  Promise.all([
    rimraf(`./${package}/*`),
    rimraf(`./lib/${package}/esm`),
    rimraf(`./lib/${package}/cjs`),
  ])
    .then(() => Promise.all([buildIcons(package)]))
    .then(() => {
      log(chalk.green('Building finished successfully!'));
    })
    .catch((err) => console.log(err));
}

let [package] = process.argv.slice(2);

if (!package) {
  throw Error('Specify target package!');
}

main(package);
