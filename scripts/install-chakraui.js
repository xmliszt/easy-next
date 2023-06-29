import path from "path";
import fs from "fs";
import spawn from "cross-spawn";

export default function installChakraUI(projectDir) {
  const __dirname = process.cwd();
  // npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
  spawn.sync("npm", [
    "i",
    "--prefix",
    projectDir,
    "@chakra-ui/react",
    "@chakra-ui/next-js",
    "@chakra-ui/icons",
    "@emotion/react",
    "@emotion/styled",
    "framer-motion",
  ]);
  const templatePath = path.resolve(__dirname, "template");
  fs.cpSync(
    path.join(templatePath, "components", "chakraUIProvider.tsx"),
    path.join(projectDir, "app", "chakraUIProvider.tsx")
  );
  fs.cpSync(
    path.join(templatePath, "layout", "rootLayout.tsx"),
    path.join(projectDir, "app", "layout.tsx")
  );
  fs.cpSync(
    path.join(templatePath, "page", "rootPage.tsx"),
    path.join(projectDir, "app", "page.tsx")
  );
  fs.cpSync(
    path.join(templatePath, "css", "globals.css"),
    path.join(projectDir, "app", "globals.css")
  );
  fs.cpSync(
    path.join(templatePath, "image", "favicon.ico"),
    path.join(projectDir, "app", "favicon.ico")
  );
}
