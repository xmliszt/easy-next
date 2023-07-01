import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default function installJest(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--save-dev",
      "--prefix",
      projectDir,
      "jest",
      "jest-environment-jsdom",
      "@testing-library/react",
      "@testing-library/jest-dom",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(templateDir, "config", "jest.config.mjs"),
          path.join(projectDir, "jest.config.mjs")
        );
        res();
      } else {
        rej("Unable to install Jest!");
      }
    });
  });
}
