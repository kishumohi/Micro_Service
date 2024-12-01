const http = require("http");
const app = require("./app.js");

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("User Service is running on 3001");
});
