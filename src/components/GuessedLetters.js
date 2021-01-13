import React, { useEffect, useState } from 'react';

const GuessedLetters = (props) => {
  //   const [letters, setLetters] = useState(null);
  //   useEffect(() => {
  //     // updateListOfLetters();
  //     console.log(letters);
  //   }, [props.letters]);

  //   const updateListOfLetters = () => {
  //     setLetters(props.letters);
  //   };

  return (
    <div className="ui cards">
      <div className="ui fluid card">
        <div className="content">
          <h4 className="ui header centered">You have used these letters!</h4>
          {/* <p>{letters}</p> */}
          <h3 className="description centered">{props.letters}</h3>
        </div>
      </div>
    </div>
  );
};

export default GuessedLetters;
