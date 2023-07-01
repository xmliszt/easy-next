#!/usr/bin/env node

import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import K from "./constants.js";
import createNextApp from "./scripts/create-next-app.js";
import ora from "ora";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import installChakraUI from "./scripts/install-chakraui.js";
import installPWA from "./scripts/install-pwa.js";
import installLicense from "./scripts/install-license.js";
import installJest from "./scripts/install-jest.js";
import installCypress from "./scripts/install-cypress.js";
import installPlaywright from "./scripts/install-playwright.js";
import installReactMarkdown from "./scripts/install-reactmarkdown.js";
import installStylelint from "./scripts/install-stylelint.js";
import installPrettier from "./scripts/install-prettier.js";
import installHusky from "./scripts/install-husky.js";
import installReactIcons from "./scripts/install-react-icons.js";
import installNextAuth from "./scripts/install-next-auth.js";
import installMomentJS from "./scripts/install-momentjs.js";
import installLodash from "./scripts/install-lodash.js";

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

let stdin = process.stdin;
stdin.on("data", (key) => {
  if (key == "\u0003") {
    logi(
      chalk.bold.yellow(
        "\nInstallation has been cancelled! Please run the program again if you would like to try to install again!"
      )
    );
  }
});

process.on("SIGINT", () => {
  logi(
    chalk.bold.yellow(
      "\nInstallation has been cancelled! Please run the program again if you would like to try to install again!"
    )
  );
});

try {
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

  const { unitTest, e2eTest, linterAndFormatter, husky, additionalFeatures } =
    await prompt([
      {
        name: "unitTest",
        message: "Choose unit-test framework to install: ",
        type: "list",
        choices: [K.jest, K.nan],
      },
      {
        name: "e2eTest",
        message: "Choose end-to-end (E2E) framework to install: ",
        type: "list",
        choices: [K.playwright, K.cypress, K.nan],
      },
      {
        name: "linterAndFormatter",
        message:
          "Any additional linter(s) or formatter(s) you would like to install: ",
        type: "checkbox",
        choices: [K.stylelint, K.prettier],
      },
      {
        name: "husky",
        message:
          "Would you like to install Husky and create the following git hooks?",
        type: "checkbox",
        choices: [K.huskyPreCommit],
      },
      {
        name: "additionalFeatures",
        message:
          "Any additional convenient libraries you would like to install?",
        type: "checkbox",
        choices: [
          K.reactIcons,
          K.nextAuth,
          K.lodash,
          K.momentjs,
          K.reactMarkdown,
        ],
      },
    ]);

  const projectDir = path.resolve(currentDir, projectName);
  const templateDir = path.resolve(__dirname, "template");
  createNextApp(projectName, templateDir);
  spinner.start("Installing Chakra UI...");
  await installChakraUI(projectDir, templateDir);
  spinner.succeed("Chakra UI successfully installed!");

  spinner.start("Setting up Progressive Web App (PWA)...");
  await installPWA(projectDir, templateDir);
  spinner.succeed("PWA successfully set up!");

  spinner.start("Retrieving MIT License...");
  await installLicense(projectDir, templateDir);
  spinner.succeed("MIT License successfully copied!");

  if (unitTest.includes(K.jest)) {
    spinner.start("Installing Jest...");
    await installJest(projectDir, templateDir);
    spinner.succeed("Jest successfully installed!");
  }

  if (e2eTest.includes(K.cypress)) {
    spinner.start("Installing Cypress...");
    await installCypress(projectDir);
    spinner.succeed("Cypress successfully installed!");
  }

  if (e2eTest.includes(K.playwright)) {
    spinner.start("Installing Playwright...");
    await installPlaywright(projectDir);
    spinner.succeed("Playwright successfully installed");
  }

  if (linterAndFormatter.includes(K.stylelint)) {
    spinner.start("Installing Stylelint...");
    await installStylelint(projectDir, templateDir);
    spinner.succeed("Stylelint successfully installed");
  }

  if (linterAndFormatter.includes(K.prettier)) {
    spinner.start("Installing Prettier...");
    await installPrettier(projectDir, templateDir);
    spinner.succeed("Prettier successfully installed!");
  }

  if (husky.includes(K.huskyPreCommit)) {
    spinner.start("Installing Husky and pre-commit hook...");
    await installHusky(projectDir);
    spinner.succeed("Husky successfully installed!");
  }

  if (additionalFeatures.includes(K.reactIcons)) {
    spinner.start("Installing React-Icons...");
    await installReactIcons(projectDir);
    spinner.succeed("React-Icons successfully installed!");
  }

  if (additionalFeatures.includes(K.nextAuth)) {
    spinner.start("Installing NextAuth.js...");
    await installNextAuth(projectDir, templateDir);
    spinner.succeed("NextAuth.js successfully installed!");
  }

  if (additionalFeatures.includes(K.momentjs)) {
    spinner.start("Installing Moment.js...");
    await installMomentJS(projectDir);
    spinner.succeed("Moment.js successfully installed!");
  }

  if (additionalFeatures.includes(K.lodash)) {
    spinner.start("Installing Lodash...");
    await installLodash(projectDir);
    spinner.succeed("Lodash successfully installed!");
  }

  if (additionalFeatures.includes(K.reactMarkdown)) {
    spinner.start("Installing React Markdown...");
    await installReactMarkdown(projectDir, templateDir);
    spinner.succeed("React Markdown successfully installed!");
  }

  logi(chalk.green("Installation completed"));
  logi(
    chalk.gray("Try ") +
      chalk.bold.yellow(`cd ${projectName}`) +
      chalk.gray(" and ") +
      chalk.bold.yellow("npm run dev") +
      chalk.gray(" to run the example Next13 TypeScript web application.")
  );
  logi(
    chalk.gray("And see ") +
      chalk.bold.yellow("PWA (Try in chrome and you can 'install' the app)") +
      chalk.gray(" in actions!")
  );
} catch (error) {
  if (error.isTtyError) {
    logi(
      chalk.bold.red("Prompt couldn't be rendered in the current environment")
    );
  } else {
    logi(chalk.bold.red(`\n${error}`));
    logi(chalk.bold.red(`Something is wrong! Please try again!`));
  }
  process.exit(1);
}
