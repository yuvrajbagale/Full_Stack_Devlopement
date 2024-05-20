// create a file named checkPath.js in the same directory
const fs = require("fs");
const path = "F:\\hitesh choudhary\\Full-Stack-Devlopement\\App.js";

fs.access(path, fs.constants.F_OK, (err) => {
  console.log(`${path} ${err ? "does not exist" : "exists"}`);
});
