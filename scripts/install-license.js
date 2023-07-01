import path from "path";
import fs from "fs";

export default async function installLicense(projectDir) {
  return new Promise((res) => {
    const __dirname = process.cwd();
    const templatePath = path.resolve(__dirname, "template");
    fs.cpSync(
      path.join(templatePath, "LICENSE"),
      path.join(projectDir, "LICENSE")
    );
    res();
  });
}
