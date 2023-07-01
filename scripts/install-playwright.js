import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installPlaywright(projectDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--save-dev",
      "--prefix",
      projectDir,
      "@playwright/test",
    ]).on("close", async (code) => {
      if (code === 0) {
        const packageJSONDir = path.join(projectDir, "package.json");
        fs.readFile(packageJSONDir, { encoding: "utf-8" }, (error, data) => {
          if (error) rej(error);
          const packageJSON = JSON.parse(data);
          packageJSON.scripts["test:e2e"] = "playwright test";
          fs.writeFile(packageJSONDir, JSON.stringify(packageJSON), (err) => {
            if (err) rej(err);
            res();
          });
        });
      } else {
        rej("Unable to install Playwright!");
      }
    });
  });
}
