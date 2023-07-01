import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

const createNextApp = (name, templateDir) => {
  const rootDir = process.cwd();
  const projectDir = path.resolve(rootDir, name);
  const options = [
    "create-next-app@latest",
    name,
    "--app",
    "--ts",
    "--tailwind",
    "--eslint",
  ];
  spawn.sync("npx", options, {
    stdio: "inherit",
  });
  fs.cpSync(
    path.join(templateDir, "config", "next-pwa.config.js"),
    path.join(projectDir, "next.config.js")
  );
  fs.cpSync(
    path.join(templateDir, "config", "gitignore"),
    path.join(projectDir, ".gitignore")
  );
};

export default createNextApp;
