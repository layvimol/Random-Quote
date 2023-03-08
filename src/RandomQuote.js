import React, { useState, useEffect } from 'react';
import axios from 'axios';


const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/', {
        headers: {
          'x-rapidapi-host': 'quotes15.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
      });
      setQuote(response.data.content);
      setAuthor(response.data.originator.name);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    fetchQuote();
  };

  return (
    <div className="flex bg-blue-100 flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-red-500 font-bold text-center my-4 font-serif">Get your quote today! 💖 </h1>
      <div className="p-4 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out hover:bg-gray-300 hover:scale-105">
        <p className="text-3xl font-bold text-center mb-2 font-evolventa">{quote}</p>
        <p className="text-lg text-gray-700 text-center">{author}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block" onClick={handleClick}>Get Random Quote</button>
        <p className="text-gray-600 text-center text-sm mt-2">© {new Date().getFullYear()} Lay Vimol: Random Quote Generator</p>
      </div>
    </div>
  );
};

export default RandomQuote;
