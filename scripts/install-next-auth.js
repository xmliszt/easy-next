import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default async function installNextAuth(projectDir) {
  return new Promise((res, rej) => {
    const rootDir = process.cwd();
    spawn("npm", ["i", "--prefix", projectDir, "next-auth"]).on(
      "close",
      (code) => {
        if (code === 0) {
          const destPath = path.resolve(projectDir, "pages", "api", "auth");
          fs.cpSync(
            path.join(rootDir, "template", "next-auth", "[...nextauth].js"),
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
