import { useRef } from 'react';
import './HangmanWord.scss';
interface Props {
  word: string;
  guessedLetters: string[];
  hasLost?: boolean;
}

function HangmanWord(props: Props) {
  const { word, guessedLetters, hasLost = false } = props;

  return (
    <div className='Hang_Word'>
      {word.split('').map((letter, index) => {
        let status = '';
        if (guessedLetters.includes(letter)) status += 'found';
        else if (hasLost) status += 'missed';
        return (
          <span key={index}>
            <span className={status}>{letter}</span>
          </span>
        );
      })}
    </div>
  );
}

export default HangmanWord;
