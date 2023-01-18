import React, { useEffect, useState } from 'react';
import './quotes.css';

const quotes = [
  {
    id: 1,
    body: `Mathematics are the result of mysterious powers which no one understands,
    and which the unconscious recognition of beauty must play an important part.
    Out of an infinity of designs a mathematician chooses one pattern for beauty’s
    sake and pulls it down to earth.`,
    author: '— Marston Morse, American mathematician',
  },
  {
    id: 2,
    body: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: '— Albert Einstein, German theoretical physicist',
  },
  {
    id: 3,
    body: `Mathematics as an expression of the human mind reflects the active will,
    the contemplative reason, and the desire for aesthetic perfection. Its basic elements
    are logic and intuition, analysis and construction, generality and individuality.`,
    author: '— Richard Courant, German-American mathematician',
  },
  {
    id: 4,
    body: `One of the endlessly alluring aspects of mathematics is that its thorniest 
    paradoxes have a way of blooming into beautiful theories.`,
    author: '— Philip J. Davis, American academic applied mathematician',
  },
  {
    id: 5,
    body: 'Millions saw the apple fall, but Newton asked why.',
    author: '— Bernard Baruch, American financier, philanthropist and statesman',
  },
  {
    id: 6,
    body: 'Pure mathematicians just love to try unsolved problems — they love a challenge',
    author: '— Andrew Wiles',
  },
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const Quotes = () => {
  const initialQuote = {
    id: 1,
    body: 'In mathematics, you don’t understand things. You just get used to them.',
    author: '— John von Neumann',
  };

  const [quotes, setQuotes] = useState(initialQuote);

  useEffect(() => {
    setInterval(() => {
      setQuotes(getRandomQuote());
    }, 10000);
  }, [setQuotes]);

  return (
    <div className="container quotes-wapper">
      <blockquote>
        {quotes.body}
        <br />
        <span className="author">{quotes.author}</span>
      </blockquote>
    </div>
  );
};

export default Quotes;
