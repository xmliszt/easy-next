import path from "path";
import fs from "fs";
import spawn from "cross-spawn";

export default async function installChakraUI(projectDir, templateDir) {
  return new Promise((res, rej) => {
    // npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
    spawn("npm", [
      "i",
      "--prefix",
      projectDir,
      "@chakra-ui/react",
      "@chakra-ui/next-js",
      "@chakra-ui/icons",
      "@emotion/react",
      "@emotion/styled",
      "framer-motion",
    ]).on("close", (code) => {
      if (code === 0) {
        fs.cpSync(
          path.join(templateDir, "components", "chakraUIProvider.tsx"),
          path.join(projectDir, "app", "chakraUIProvider.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "layout", "rootLayout.tsx"),
          path.join(projectDir, "app", "layout.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "page", "rootPage.tsx"),
          path.join(projectDir, "app", "page.tsx")
        );
        fs.cpSync(
          path.join(templateDir, "css", "globals.css"),
          path.join(projectDir, "app", "globals.css")
        );
        fs.cpSync(
          path.join(templateDir, "image", "favicon.ico"),
          path.join(projectDir, "app", "favicon.ico")
        );
        res();
      } else {
        rej("Unable to install Chakra UI!");
      }
    });
  });
}
