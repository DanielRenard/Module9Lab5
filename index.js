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
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  //send to all possible clients - emit
  io.emit("connection", "a user connected");
  io.emit("chat message", (msg));
  })
  //server
  console.log('SERVER - a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
