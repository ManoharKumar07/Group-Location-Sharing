const express = require("express");
const app = express();

// Socket io runs on http server so we hav create http server
const http = require("http");

// Socket.io Setup
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.get("/", () => {
  res.send("hii");
});

server.listen(3000, () => {
  console.log("Server Started Running");
});
