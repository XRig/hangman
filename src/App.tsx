import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import HangmanDrawing from './components/Drawing/HangmanDrawing';
import HangmanWord from './components/Word/HangmanWord';
import Keyboard from './components/Keyboard/Keyboard';
function App() {
  const [hangWord, setHangWord] = useState('queue');
  const [guessed, setGuessed] = useState<string[]>([]);
  const badGuesses = guessed.filter((letter) => !hangWord.includes(letter));
  const isLoser = badGuesses.length >= 6;
  const isWinner = hangWord
    .split('')
    .every((letter) => guessed.includes(letter));

  useEffect(() => {
    axios
      .get('https://random-word-api.herokuapp.com/word')
      .then((response) => setHangWord(response.data[0]));
  }, []);

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessed.includes(letter)) return;
      setGuessed((guessed) => [...guessed, letter]);
    },
    [guessed]
  );

  return (
    <div className='App'>
      <div className='gameStatus'>
        {isWinner && 'Winner! - Refresh to try again'}
        {isLoser && 'Nice Try - Refresh to try again'}
      </div>
      <HangmanDrawing badGuesses={badGuesses.length} />
      <HangmanWord word={hangWord} guessedLetters={guessed} hasLost={isLoser} />
      <Keyboard
        activeLetters={guessed.filter((letter) => hangWord.includes(letter))}
        inactiveLetters={badGuesses}
        addGuess={addGuessedLetters}
        disabled={isWinner || isLoser}
      />
    </div>
  );
}

export default App;
