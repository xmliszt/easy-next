import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installReactMarkdown(projectDir) {
  return new Promise((res, rej) => {
    const rootDir = process.cwd();
    spawn("npm", ["install", "--prefix", projectDir, "react-markdown"]).on(
      "close",
      (code) => {
        if (code === 0) {
          fs.cpSync(
            path.join(
              rootDir,
              "template",
              "config",
              "next-pwa-with-markdown.config.js"
            ),
            path.join(projectDir, "next.config.js")
          );
          fs.cpSync(
            path.join(rootDir, "template", "config", "globals.d.ts"),
            path.join(projectDir, "globals.d.ts")
          );
          res();
        } else {
          rej("Unable to install React Markdown!");
        }
      }
    );
  });
}
