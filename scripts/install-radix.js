import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default function installRadixUI(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--prefix",
      projectDir,
      "@radix-ui/themes",
      "@radix-ui/react-icons",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(templateDir, "components", "RadixThemeProvider.tsx"),
          path.join(projectDir, "app", "RadixThemeProvider.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "layout", "rootLayout-radix.tsx"),
          path.join(projectDir, "app", "layout.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "page", "rootPage-radix.tsx"),
          path.join(projectDir, "app", "page.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "css", "globals-radix.css"),
          path.join(projectDir, "app", "globals.css")
        );
        fs.cpSync(
          path.join(templateDir, "image", "favicon.ico"),
          path.join(projectDir, "app", "favicon.ico")
        );
        res();
      } else {
        rej("Unable to install Radix UI!");
      }
    });
  });
}
