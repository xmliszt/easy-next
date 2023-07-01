import path from "path";
import spawn from "cross-spawn";

export default async function installHuskyWithPrecommitHook(projectDir) {
  return new Promise((res, rej) => {
    spawn("git", ["init", projectDir]).on("close", (code) => {
      if (code !== 0) {
        rej("Unable to install Husky!");
        return;
      }
      spawn("npm", [
        "install",
        "--save-dev",
        "--prefix",
        projectDir,
        "husky",
      ]).on("close", (code) => {
        if (code !== 0) {
          rej("Unable to install Husky!");
          return;
        }
        spawn("npm", [
          "pkg",
          "set",
          "scripts.prepare=husky install",
          "--prefix",
          projectDir,
        ]).on("close", (code) => {
          if (code !== 0) {
            rej("Unable to install Husky!");
            return;
          }
          spawn("npm", [
            "pkg",
            "set",
            "scripts.test=jest --passWithNoTests",
            "--prefix",
            projectDir,
          ]).on("close", (code) => {
            if (code !== 0) {
              rej("Unable to install Husky!");
              return;
            }
            spawn("npm", ["run", "prepare", "--prefix", projectDir]).on(
              "close",
              (code) => {
                if (code !== 0) {
                  rej("Unable to install Husky!");
                  return;
                }
                spawn("npx", [
                  "husky",
                  "add",
                  path.join(projectDir, ".husky", "pre-commit"),
                  "npm run test",
                ]).on("close", (code) => {
                  if (code !== 0) {
                    rej("Unable to install Husky!");
                    return;
                  }
                  res();
                });
              }
            );
          });
        });
      });
    });
  });
}
