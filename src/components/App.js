import React, { useEffect, useState } from 'react';
// import arrayOfWordsTest from '../arrayOfWords.test';
import WordDisplay from './WordDisplay';
import GuessedLetters from './GuessedLetters';

//
const word = 'Encyclopedia';
const numberOfWrongGuessesAllowed = 6;
let mistakes = 0;

const guessedLettersSet = new Set();
let guessedLettersArray = [];

const App = () => {
  const [guesses, setGuesses] = useState(guessedLettersArray);

  useEffect(() => {
    document.addEventListener('keypress', handleKeypress);

    checkWinConditions();

    return () => document.removeEventListener('keypress', handleKeypress);
  });

  const handleKeypress = (event) => {
    guessedLettersSet.add(event.key);
    guessedLettersArray = Array.from(guessedLettersSet);

    checkForWrongGuess(event.key);

    setGuesses(guessedLettersArray);
  };

  const checkForWrongGuess = (key) => {
    if (!RegExp(key, 'i').test(word)) {
      mistakes++;
      console.log(key, mistakes);
    }
  };

  const checkWinConditions = () => {
    if (mistakes >= numberOfWrongGuessesAllowed) {
      console.log('You lost');
      return 'you lose';
    }
    const guessTester = (letter) => guesses.includes(letter);

    const wordArray = Array.from(word.toLowerCase());

    return wordArray.every(guessTester);
  };

  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column wide">
          <h2 className="ui header centered">Guess the word!</h2>
          <GuessedLetters letters={guesses} />
          <WordDisplay guesses={guesses} word={word} />
        </div>
      </div>
    </div>
  );
};

export default App;
