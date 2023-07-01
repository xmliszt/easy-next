import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installNextAuth(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", ["i", "--prefix", projectDir, "next-auth"]).on(
      "close",
      (code) => {
        if (code === 0) {
          const destPath = path.resolve(projectDir, "pages", "api", "auth");
          fs.cpSync(
            path.join(templateDir, "next-auth", "[...nextauth].js"),
            path.join(destPath, "[...nextauth].js")
          );
          res();
        } else {
          rej("Unable to install NextAuth.js!");
        }
      }
    );
  });
}
