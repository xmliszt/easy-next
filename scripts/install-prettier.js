import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installPrettier(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--save-dev",
      "--prefix",
      projectDir,
      "prettier",
      "eslint-config-prettier",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(templateDir, "config", ".prettierrc.json"),
          path.join(projectDir, ".prettierrc.json")
        );

        fs.cpSync(
          path.join(templateDir, "config", ".prettierignore"),
          path.join(projectDir, ".prettierignore")
        );

        const eslintConfigJSONPath = path.join(projectDir, ".eslintrc.json");
        fs.readFile(
          eslintConfigJSONPath,
          { encoding: "utf-8" },
          (err, data) => {
            if (err) rej(err);
            const eslintConfig = JSON.parse(data);

            eslintConfig["extends"] = ["next/core-web-vitals", "prettier"];
            fs.writeFile(
              eslintConfigJSONPath,
              JSON.stringify(eslintConfig),
              (err) => {
                if (err) rej(err);
                res();
              }
            );
          }
        );
      } else {
        rej("Unable to install Prettier!");
      }
    });
  });
}
