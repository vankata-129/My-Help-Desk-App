import React from 'react';
import './ChatInterface.css';


function sendChatMessage(userPrompt) {
    const url = 'http://localhost:5000/chat';
    const payload = {
      user_prompt: userPrompt
    };
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data here
      return data;
    })
    .catch(error => {
      // Handle any errors here
      console.error('There was an error!', error);
    });
  }
  

  const ChatInterface = ({ conversation }) => {
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
  
  const ChatComponent = () => {
    const [conversation, setConversation] = useState([]);
  
    const handleSendChatMessage = (userPrompt) => {
      const userMessage = { sender: 'user', text: userPrompt };
  
      // Add the user's message to the conversation
      setConversation([...conversation, userMessage]);
  
      // Send the message to the backend
      sendChatMessage(userPrompt).then(data => {
        const botMessage = { sender: 'bot', text: data.response };
  
        // Add the bot's response to the conversation
        setConversation([...conversation, botMessage]);
      });
    };
  
    return (
      <div>
        <button onClick={() => handleSendChatMessage('Hello!')}>Send Message</button>
        <ChatInterface conversation={conversation} />
      </div>
    );
  };
  
export default ChatInterface;
