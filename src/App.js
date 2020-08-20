import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    'Hello',
    'Hi',
    'Whats up',
    'All good, how are you',
  ]);

  // console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello Suraj 🚀</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
