// import module
const http = require("http");
const port = 3001;

// create server
const server = http.createServer((req, res) => {
  res.write("Hello :3");
  res.end;
});
// display server online mesage in console
server.listen(port, () => {
  console.log("Server online");
});
