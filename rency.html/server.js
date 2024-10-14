const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Chatbot logic
const responses = {
  'hello': 'Hi there! How can I assist you today?',
  'what is your name?': 'I am your virtual assistant!',
  'how can I contact support?': 'You can contact support at support@example.com.',
  'bye': 'Goodbye! Have a nice day!'
};

// Endpoint to handle chatbot conversation
app.post('/chat', (req, res) => {
  const { message } = req.body;
  const lowerCaseMessage = message.toLowerCase();
  
  const reply = responses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
  res.json({ reply });
});

// Start server
app.listen(port, () => {
  console.log(`Chatbot backend running on http://localhost:${port}`);
});
