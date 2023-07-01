import spawn from "cross-spawn";

export default async function installReactIcons(projectDir) {
  return new Promise((res, rej) => {
    spawn("npm", [
      "install",
      "--prefix",
      projectDir,
      "react-icons",
      "--save",
    ]).on("close", (code) => {
      if (code === 0) {
        res();
      } else {
        rej("Unable to install React-Icons!");
      }
    });
  });
}
