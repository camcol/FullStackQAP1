// import module
const fs = require("fs");

//display in console contents of hello.txt
fs.readFile("./hello.txt", { encoding: "utf8" }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
