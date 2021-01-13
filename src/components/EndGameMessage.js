import React from 'react';

const EndGameMessage = ({ win, lose }) => {
  const style = {
    textAlign: 'center',
  };

  const message = win ? 'You Win!' : 'You Lost!';
  const icon = win ? 'heart' : 'close';

  return (
    <div style={style} className="content">
      <h2 className="ui icon header">
        <i className={`${icon} icon`}></i>
        {message}
      </h2>
      <div className="ui form">
        <button
          className="ui button primary"
          onClick={() => window.location.reload()}
        >
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default EndGameMessage;
