import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    const countWords = () => {
      const words = text.split(/\s+/).filter(Boolean);
      return words.length;
    };

    const wordCount = countWords();
    document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;
  }, [text]);

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="cont shadow">
        <h3 className="text-center">Responsive Paragraph Word <br />Counter</h3>
        <textarea
          className="form-control fw-bold"
          placeholder="Enter some text"
          rows="5"
          value={text}
          onChange={handleTextareaChange}
        ></textarea>
        <br />
        <p className="text-dark text-left" id="wordCount">
          Word Count: 0
        </p>
      </div>
    </div>
  );
}

export default App;
