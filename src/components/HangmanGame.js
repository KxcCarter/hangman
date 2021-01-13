import React, { useEffect, useState } from 'react';

import WordDisplay from './WordDisplay';
import GuessedLetters from './GuessedLetters';

//
// const word = 'Encyclopedia';
const numberOfWrongGuessesAllowed = 6;
let mistakes = 0;

const guessedLettersSet = new Set();
let guessedLettersArray = [];

const HangmanGame = ({ word }) => {
  const [guesses, setGuesses] = useState(guessedLettersArray);
  const [gameWin, setGameWin] = useState(false);
  const [gameLose, setGameLose] = useState(false);

  useEffect(() => {
    document.addEventListener('keypress', handleKeypress);

    checkWinConditions();

    return () => document.removeEventListener('keypress', handleKeypress);
  });

  const handleKeypress = ({ key }) => {
    const filteredKeys = /[a-zA-Z]/;
    // check to see if key is alphabetical character
    if (filteredKeys.test(key)) {
      // check to see if key has already been added to set
      // If not in set, check to see if key exists within word
      if (!guessedLettersSet.has(key)) {
        checkForWrongGuess(key);
      }
      // Add pressed key to set, then create an array from the set.
      guessedLettersSet.add(key);
      guessedLettersArray = Array.from(guessedLettersSet);
      // Set guesses piece of state
      setGuesses(guessedLettersArray);
    }
  };

  const checkForWrongGuess = (key) => {
    // test given key against word
    if (!RegExp(key, 'i').test(word)) {
      // if test fails, increment mistakes counter.
      mistakes++;
      console.log(key, mistakes);
    }
  };

  const checkWinConditions = () => {
    if (mistakes >= numberOfWrongGuessesAllowed) {
      console.log('You lost');
      setGameLose(true);
    }

    const wordArray = Array.from(word.toLowerCase());
    // test to see if every character from the word appears within the array of guesses
    if (wordArray.every((letter) => guesses.includes(letter))) {
      console.log('You win!');
      setGameWin(true);
    }
  };

  return (
    <div className="ui row">
      <div className="column wide">
        <h2 className="ui header centered">Guess the word!</h2>
        <GuessedLetters letters={guesses} />
        <WordDisplay guesses={guesses} word={word} />
      </div>
    </div>
  );
};

export default HangmanGame;
