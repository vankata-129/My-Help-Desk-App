
import React from 'react';
import ChatComponent from './components/ChatComponent';
import LandingPage from './components/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Help Desk App</h1>
      </header>
      <main>
        <LandingPage />
        <ChatComponent />
      </main>
    </div>
  );
}

export default App;
