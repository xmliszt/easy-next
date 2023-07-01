import path from "path";
import fs from "fs";

export default async function installLicense(projectDir, templateDir) {
  return new Promise((res) => {
    fs.cpSync(
      path.join(templateDir, "LICENSE"),
      path.join(projectDir, "LICENSE")
    );
    res();
  });
}
