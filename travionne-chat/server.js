const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from 'travionne-chat' folder
app.use(express.static('travionne-chat'));

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages from clients
  socket.on('chatMessage', (message) => {
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
