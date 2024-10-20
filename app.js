const express = require("express");
const app = express();

// Socket io runs on http server
const http = require("http");

// Socket.io Setup
const socketio = require("socket.io");
// Creating http server
const server = http.createServer(app);
const io = socketio(server);

app.get("/", () => {
  res.send("hii");
});

server.listen(3000, () => {
  console.log("Server Running at port 3000");
});
