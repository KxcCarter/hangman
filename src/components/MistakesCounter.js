import React from 'react';

const MistakesCounter = ({ mistakes }) => {
  return (
    <div className="card">
      <div className="content">
        <p className="center aligned description">number of mistakes made</p>
        <h3 className="center aligned header">{mistakes}</h3>
      </div>
    </div>
  );
};

export default MistakesCounter;
