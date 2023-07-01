import spawn from "cross-spawn";

export default async function installMomentJS(projectDir) {
  return new Promise((res, rej) => {
    spawn("npm", ["install", "--prefix", projectDir, "moment", "--save"]).on(
      "close",
      (code) => {
        if (code === 0) {
          res();
        } else {
          rej("Unable to install Moment.js!");
        }
      }
    );
  });
}
