import path from "path";
import fs from "fs";
import spawn from "cross-spawn";

export default async function installPWA(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", ["i", "--prefix", projectDir, "next-pwa"]).on(
      "close",
      (code) => {
        if (code === 0) {
          const icons = [
            "android-chrome-192x192.png",
            "android-chrome-512x512.png",
            "apple-touch-icon.png",
            "favicon-16x16.png",
            "favicon-32x32.png",
          ];
          for (let icon of icons) {
            fs.cpSync(
              path.join(templateDir, "image", icon),
              path.join(projectDir, "public", icon)
            );
          }
          fs.cpSync(
            path.join(templateDir, "pwa", "manifest.json"),
            path.join(projectDir, "public", "manifest.json")
          );
          res();
        } else {
          rej("Unable to set up PWA!");
        }
      }
    );
  });
}
