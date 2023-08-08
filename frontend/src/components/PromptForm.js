import React, { useState } from 'react';

const PromptForm = ({ onSubmitPrompt }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitPrompt(prompt);
    setPrompt(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prompt">Enter your question or issue:</label>
      <input
        type="text"
        id="prompt"
        name="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PromptForm;
