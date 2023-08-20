import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const data = response.data;
      setQuote(data.content);
      setAuthor(data.author);
    } catch(error) {
      console.error("Error fetching quote: ", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  

  return (
    <div className="App">
      <div className="quote-container">
        <h1>Random Quote Generator</h1>
        <div className="quote">
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
        <button onClick={fetchQuote}>Generate New Quote</button>
      </div>
    </div>
  );
}

export default App;
