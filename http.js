const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  res.write("Hello :3");
  res.end;
});
server.listen(port, () => {
  console.log("Server online");
});
