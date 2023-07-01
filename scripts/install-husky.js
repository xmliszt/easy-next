import path from "path";
import spawn from "cross-spawn";

export default async function installHusky(projectDir) {
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
          spawn("npm", ["run", "prepare", "--prefix", projectDir]).on(
            "close",
            (code) => {
              if (code !== 0) {
                rej("Unable to install Husky!");
                return;
              }
              res();
            }
          );
        });
      });
    });
  });
}
