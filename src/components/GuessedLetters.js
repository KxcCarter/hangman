import React from 'react';

const style = {
  border: '1px solid black',
  padding: '5px',
  margin: '5px',
  display: 'inline',
};

const GuessedLetters = (props) => {
  const guessedLetters = props.letters.map((letter, index) => {
    return (
      <h3 key={index} style={style} className="description centered">
        {letter}
      </h3>
    );
  });

  return (
    <div className="ui cards">
      <div className="ui fluid card">
        <div className="content">
          <h4 className="ui header centered">You have used these letters!</h4>
          {guessedLetters}
        </div>
      </div>
    </div>
  );
};

export default GuessedLetters;
