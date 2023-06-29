import path from "path";
import fs from "fs";

export default function installLicense(projectDir) {
  const __dirname = process.cwd();
  const templatePath = path.resolve(__dirname, "template");
  fs.cpSync(
    path.join(templatePath, "LICENSE"),
    path.join(projectDir, "LICENSE")
  );
}
