import React, { useState } from 'react';

function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        sender: 'user',
      };
      setMessages([...messages, message]);
      setNewMessage('');
      // Implement logic to send the message to the chatbot and receive a response
      // You can use APIs, websockets, or any other method to communicate with the chatbot backend
      // Once you receive the response, add it to the messages state with the sender as 'chatbot'
    }
  };

  return (
    <div>
      <h1>Chatbot Page</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatbotPage;
