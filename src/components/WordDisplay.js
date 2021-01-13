import React from 'react';
import LetterDisplay from './LetterDisplay';

const word = 'Encyclopedia';
const letterArray = word.split('');

const WordDisplay = (props) => {
  const renderedLetter = letterArray.map((letter) => {
    return <LetterDisplay letter={letter} visible={true} />;
  });

  return (
    <div>
      <h2>I am a word</h2>
      {renderedLetter}
    </div>
  );
};

export default WordDisplay;
