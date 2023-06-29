import path from "path";
import fs from "fs";
import spawn from "cross-spawn";

export default function installPWA(projectDir) {
  const __dirname = process.cwd();
  spawn.sync("npm", ["i", "--prefix", projectDir, "next-pwa"]);
  const templatePath = path.resolve(__dirname, "template");
  const icons = [
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
  ];
  for (let icon of icons) {
    fs.cpSync(
      path.join(templatePath, "image", icon),
      path.join(projectDir, "public", icon)
    );
  }
  fs.cpSync(
    path.join(templatePath, "pwa", "manifest.json"),
    path.join(projectDir, "public", "manifest.json")
  );
}
