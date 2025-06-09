const chalk = require('chalk');

const color = () => {
  console.log(chalk.blue.bgRed.bold('Hello world!'));
  console.log(chalk.blue.bgRed.bold('can its work properly'));
};

color();