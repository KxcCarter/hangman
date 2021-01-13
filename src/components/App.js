import React from 'react';
import arrayOfWordsTest from '../arrayOfWords.test';
import WordDisplay from './WordDisplay';

document.addEventListener('keypress', (event) => {
  console.log(event.key);
});

const App = (props) => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column wide">
          <p>wooooow it is it</p>
          <WordDisplay />
        </div>
      </div>
    </div>
  );
};

export default App;
