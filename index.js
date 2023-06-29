#!/usr/bin/env node

import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import K from "./constants.js";
import createNextApp from "./scripts/create-next-app.js";
import ora from "ora";

import installChakraUI from "./scripts/install-chakraui.js";
import installPWA from "./scripts/install-pwa.js";
import installLicense from "./scripts/install-license.js";

const prompt = inquirer.createPromptModule();
const currentDir = process.cwd();
const logi = console.log;
const spinner = ora();

logi(
  "=== Welcome to " +
    chalk.bold.green("NextJS 13 Easy Template (TypeScript)") +
    "! ==="
);
logi(
  chalk.yellow(
    `Note: This template will create a NextJS 13 project for you, using ${chalk.bold(
      "'App Router'"
    )} (to know more about 'app router', visit: ${chalk.blue(
      "https://nextjs.org/docs"
    )}), in TypeScript`
  )
);
logi(
  "👋 \tTo allow us to easily set up your project in no time,\n\tplease answer the following questions ↓ ↓ ↓\n"
);

const { projectName } = await prompt([
  {
    name: "projectName",
    message: "Enter your project name: ",
    validate: (input) => {
      if (input.trim().length <= 0) {
        return "Project name cannot be empty!";
      } else {
        return true;
      }
    },
  },
]);

// const { features, formatters, husky, additionalFeatures } = await prompt([
//   {
//     name: "features",
//     message: "Choose other packages you would like to install: ",
//     type: "checkbox",
//     choices: [K.jest, K.playwright],
//   },
//   {
//     name: "formatters",
//     message:
//       "Any additional linter(s) or formatter(s) you would like to install: ",
//     type: "checkbox",
//     choices: [K.stylelint, K.prettier],
//   },
//   {
//     name: "husky",
//     message:
//       "Would you like to install Husky and create the following git hooks?",
//     type: "checkbox",
//     choices: [K.huskyPreCommit],
//   },
//   {
//     name: "additionalFeatures",
//     message: "Any additional convenient libraries you would like to install?",
//     type: "checkbox",
//     choices: [K.reactIcons, K.nextAuth, K.lodash, K.momentjs, K.reactMarkdown],
//   },
// ]);

const projectDir = path.resolve(currentDir, projectName);
createNextApp(projectName);
installChakraUI(projectDir);
installPWA(projectDir);
installLicense(projectDir);

logi(
  chalk.bold.green(
    `Installation complete! Try "cd ${projectName}" and "npm run dev" to run the example Next web app!`
  )
);
