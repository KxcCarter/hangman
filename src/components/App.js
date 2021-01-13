import React from 'react';
import arrayOfWordsTest from '../arrayOfWords.test';
import WordDisplay from './WordDisplay';

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
