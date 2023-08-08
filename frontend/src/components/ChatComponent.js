import React, { useState } from 'react';
import PromptForm from './PromptForm';
import ChatInterface from './ChatInterface';

function sendChatMessage(userPrompt) {
  const url = 'http://localhost:5000/chat';
  const payload = { user_prompt: userPrompt };

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('There was an error!', error);
    });
}

const ChatComponent = () => {
  const [conversation, setConversation] = useState([]);

  const handleSubmitPrompt = (prompt) => {
    const userMessage = { sender: 'user', text: prompt };
    setConversation([...conversation, userMessage]);

    // Send the message to the backend and handle the response
    sendChatMessage(prompt).then((data) => {
      const botMessage = { sender: 'bot', text: data.response };
      setConversation([...conversation, botMessage]);
    });
  };

  return (
    <div>
      <PromptForm onSubmitPrompt={handleSubmitPrompt} />
      <ChatInterface conversation={conversation} />
    </div>
  );
};

export default ChatComponent;