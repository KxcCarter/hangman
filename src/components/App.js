import React, { useEffect, useState } from 'react';
import randomWordFetcher from '../apis/randomWordFetcher';
import HangmanGame from './HangmanGame';

const App = () => {
  const [word, setWord] = useState(null);

  useEffect(() => {
    getWord();
  }, []);

  const getWord = async () => {
    const { data } = await randomWordFetcher.get();
    console.log(`Hey! No cheating! The word is ${data[0]}`);
    setWord(data[0]);
  };

  return (
    <div className="ui container grid">
      {word && <HangmanGame word={word} />}
    </div>
  );
};

export default App;
