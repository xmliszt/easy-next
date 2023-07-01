import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installReactMarkdown(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", ["install", "--prefix", projectDir, "react-markdown"]).on(
      "close",
      (code) => {
        if (code === 0) {
          fs.cpSync(
            path.join(
              templateDir,
              "config",
              "next-pwa-with-markdown.config.js"
            ),
            path.join(projectDir, "next.config.js")
          );
          fs.cpSync(
            path.join(templateDir, "config", "globals.d.ts"),
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
