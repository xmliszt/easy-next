import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installStylelint(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--save-dev",
      "--prefix",
      projectDir,
      "stylelint-config-standard",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(templateDir, "config", "stylelintrc.json"),
          path.join(projectDir, ".stylelintrc.json")
        );
        res();
      } else {
        rej("Unable to install Styelint!");
      }
    });
  });
}
