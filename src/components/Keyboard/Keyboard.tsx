import { useEffect } from 'react';
import './Keyboard.scss';
interface Props {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuess(letter: string): void;
  disabled?: boolean;
}
//prettier-ignore
const KEYS = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
              'n','o','p','q','r','s','t','u','v','w','x','y','z'];

function Keyboard(props: Props) {
  useEffect(() => {
    if (!disabled) {
      const handler = (e: KeyboardEvent) => {
        const key = e.key;
        if (!key.match(/^[a-z]$/)) return;
        addGuess(key);
      };
      document.addEventListener('keypress', handler);
      return () => document.removeEventListener('keypress', handler);
    }
  });

  const { activeLetters, inactiveLetters, addGuess, disabled = false } = props;
  return (
    <div className='keyboard'>
      {KEYS.map((key) => {
        const status = activeLetters.includes(key) ? 'btn found' : 'btn';
        const isInactive =
          inactiveLetters.includes(key) || activeLetters.includes(key);
        return (
          <button
            disabled={isInactive || disabled}
            className={status}
            onClick={() => addGuess(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
