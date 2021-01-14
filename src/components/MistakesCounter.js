import React from 'react';

const MistakesCounter = ({ guessesRemaining }) => {
  return (
    <div className="card">
      <div className="content">
        <p className="center aligned description">Wrong Guesses Remaining</p>
        <h3 className="center aligned header">{guessesRemaining}</h3>
      </div>
    </div>
  );
};

export default MistakesCounter;
