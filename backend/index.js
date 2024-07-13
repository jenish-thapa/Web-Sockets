const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  console.log("A user connected");
});

server.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
