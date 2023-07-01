import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installCypress(projectDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--save-dev",
      "--prefix",
      projectDir,
      "cypress",
    ]).on("close", (code) => {
      if (code === 0) {
        const packageJSONDir = path.join(projectDir, "package.json");
        fs.readFile(packageJSONDir, { encoding: "utf-8" }, (err, data) => {
          if (err) rej(err);
          const packageJSON = JSON.parse(data);
          packageJSON.scripts["cypress"] = "cypress open";
          fs.writeFile(packageJSONDir, JSON.stringify(packageJSON), (err) => {
            if (err) rej(err);
            res();
          });
        });
      } else {
        rej("Unable to install Cypress!");
      }
    });
  });
}
