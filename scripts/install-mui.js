import fs from "fs";
import path from "path";
import spawn from "cross-spawn";

export default function installMUI(projectDir, templateDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--prefix",
      projectDir,
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
      "@mui/icons-material",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(templateDir, "components", "MUIThemeProvider.tsx"),
          path.join(projectDir, "app", "MUIThemeProvider.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "layout", "rootLayout-mui.tsx"),
          path.join(projectDir, "app", "layout.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "page", "rootPage-mui.tsx"),
          path.join(projectDir, "app", "page.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "css", "globals-mui.css"),
          path.join(projectDir, "app", "globals.css")
        );
        fs.cpSync(
          path.join(templateDir, "image", "favicon.ico"),
          path.join(projectDir, "app", "favicon.ico")
        );
        res();
      } else {
        rej("Unable to install Material UI!");
      }
    });
  });
}
