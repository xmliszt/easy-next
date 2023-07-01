import path from "path";
import fs from "fs";

export default async function installWithoutChakraUI(projectDir, templateDir) {
  return new Promise((res) => {
    fs.cpSync(
      path.join(templateDir, "layout", "rootLayout-no-chakraui.tsx"),
      path.join(projectDir, "app", "layout.tsx")
    );
    fs.cpSync(
      path.join(templateDir, "page", "rootPage-no-chakraui.tsx"),
      path.join(projectDir, "app", "page.tsx")
    );
    fs.cpSync(
      path.join(templateDir, "css", "globals-no-chakraui.css"),
      path.join(projectDir, "app", "globals.css")
    );
    fs.cpSync(
      path.join(templateDir, "image", "favicon.ico"),
      path.join(projectDir, "app", "favicon.ico")
    );
    res();
  });
}
