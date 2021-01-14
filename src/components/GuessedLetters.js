import React from 'react';

const style = {
  border: '1px solid black',
  padding: '4px',
  margin: '4px',
  display: 'inline',
  boxShadow: '1px 2px 3px black',
};

const GuessedLetters = (props) => {
  const guessedLetters = props.letters.map((letter, index) => {
    return (
      <p key={index} style={style} className="center aligned description">
        {letter}
      </p>
    );
  });

  return (
    <div className="card">
      <div className="content">
        <h3 className="center aligned">
          You have already guessed these letters!
        </h3>
        {guessedLetters}
      </div>
    </div>
  );
};

export default GuessedLetters;
