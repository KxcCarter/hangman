import React from 'react';
import LetterDisplay from './LetterDisplay';

const WordDisplay = ({ guesses, word }) => {
  const letterArray = word.split('');
  const renderedLetter = letterArray.map((letter, index) => {
    return (
      <LetterDisplay
        letter={letter}
        visible={guesses.includes(letter.toLowerCase()) ? true : false}
        key={index}
      />
    );
  });

  return (
    <div className="ui raised very padded text container segment">
      <div className="content">{renderedLetter}</div>
    </div>
  );
};

export default WordDisplay;
