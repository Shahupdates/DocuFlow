import React, { useState } from 'react';

function ChatbotPage() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    // Implement the logic to send a message and receive a response from the chatbot
    const response = 'This is the response from the chatbot.';
    setMessages([...messages, { text: message, sender: 'user' }, { text: response, sender: 'chatbot' }]);
  };

  return (
    <div>
      <h1>Chatbot Page</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'user-message' : 'chatbot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <input type="text" placeholder="Type your message" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => handleSendMessage(message)}>Send</button>
    </div>
  );
}

export default ChatbotPage;
