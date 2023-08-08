import React from 'react';
import './ChatInterface.css';

const ChatInterface = ({ conversation }) => {
  if (!conversation) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chat with IT Help Desk</h1>
      <div className="chat-box">
        {conversation.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;

