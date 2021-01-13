import React from 'react';
import LetterDisplay from './LetterDisplay';

const word = 'Encyclopedia';
const letterArray = word.split('');

const WordDisplay = (props) => {
  const renderedLetter = letterArray.map((letter, index) => {
    return <LetterDisplay letter={letter} visible={true} key={index} />;
  });

  return (
    <div className="ui raised very padded text container segment">
      <div className="content">
        <h2 className="ui header">Guess the word!</h2>
        {renderedLetter}
      </div>
    </div>
  );
};

export default WordDisplay;
