import spawn from "cross-spawn";

export default async function installLodash(projectDir) {
  return new Promise((res, rej) => {
    spawn("npm", ["i", "--prefix", projectDir, "--save", "lodash"]).on(
      "close",
      (code) => {
        if (code === 0) {
          res();
        } else {
          rej("Unable to install Lodash!");
        }
      }
    );
  });
}
