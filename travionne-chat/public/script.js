// Connect to the server
const socket = io();

// Get references to the elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-message');
const chatBox = document.getElementById('chat-box');

// Send a message when the button is clicked
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    socket.emit('chatMessage', message); // Emit the message to the server
    messageInput.value = ''; // Clear the input
  }
});

// Listen for incoming messages and display them in the chat box
socket.on('chatMessage', (message) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatBox.appendChild(messageElement); // Add the message to the chat box
});
