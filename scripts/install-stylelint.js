import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installStylelint(projectDir) {
  return new Promise((res, rej) => {
    const rootDir = process.cwd();
    spawn("npm", [
      "install",
      "--save-dev",
      "--prefix",
      projectDir,
      "stylelint-config-standard",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(rootDir, "template", "config", "stylelintrc.json"),
          path.join(projectDir, ".stylelintrc.json")
        );
        res();
      } else {
        rej("Unable to install Styelint!");
      }
    });
  });
}
