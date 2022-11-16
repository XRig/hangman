import './hangman.scss';
interface Props {
  badGuesses: number;
}

function HangmanDrawing(props: Props) {
  const { badGuesses } = props;
  const head = <div className='head' />;
  const body = <div className='body' />;
  const rightArm = <div className='rightArm' />;
  const leftArm = <div className='leftArm' />;
  const rightLeg = <div className='rightLeg' />;
  const leftLeg = <div className='leftLeg' />;
  const parts = [head, body, rightArm, leftArm, rightLeg, leftLeg];

  return (
    <div className='drawing'>
      {parts.slice(0, badGuesses)}
      <div className='rope' />
      <div className='beam' />
      <div className='post' />
      <div className='base' />
    </div>
  );
}

export default HangmanDrawing;
