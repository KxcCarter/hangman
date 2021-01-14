import React from 'react';
import ReactDOM from 'react-dom';

const EndGameModal = ({ win }) => {
  const style = {
    textAlign: 'center',
  };

  const message = win ? 'You Win!' : 'You Lost!';
  const icon = win ? 'heart' : 'close';

  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        onClick={(event) => event.stopPropagation()}
        className="ui standard modal visible active"
      >
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
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default EndGameModal;
