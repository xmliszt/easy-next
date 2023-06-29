import spawn from "cross-spawn";

const createNextApp = (name) => {
  const options = [
    "create-next-app@latest",
    name,
    "--app",
    "--ts",
    "--tailwind",
    "--eslint",
  ];
  spawn.sync("npx", options, {
    stdio: "inherit",
  });
};

export default createNextApp;
