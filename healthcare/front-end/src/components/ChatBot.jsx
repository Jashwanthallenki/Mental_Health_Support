// ChatBot.js
import { useState } from 'react';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([]); // List of messages in the chat
  const [inputMessage, setInputMessage] = useState(''); // Message input by the user

  // Function to handle sending a message
  const sendMessage = async () => {
    if (!inputMessage.trim()) return; // Prevent sending empty messages

    // Add user's message to the chat
    const newMessage = { sender: 'user', text: inputMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      // Send the user's message to the server
      const response = await fetch('http://localhost:3000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json(); // Assuming the server returns JSON

      // Add bot's response to the chat
      const botMessage = { sender: 'bot', text: data.summary }; // Changed from data.response to data.summary
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong!' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    // Clear the input field
    setInputMessage('');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-display">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
