const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("SERVER - a user connected"); //server
  io.emit("chat message", "a user connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("SERVER - user disconnected");
    io.emit("chat message", "some user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});