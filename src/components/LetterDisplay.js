import React from 'react';

const LetterDisplay = (props) => {
  const style = {
    textDecoration: 'underline',
    textUnderlinePosition: 'under',
    letterSpacing: '1rem',
    display: 'inline',
    fontSize: '2.7rem',
    padding: '3px',
    WebkitTextSecurity: props.visible ? null : 'disc',
  };

  return <p style={style}>{props.letter}</p>;
};

export default LetterDisplay;
