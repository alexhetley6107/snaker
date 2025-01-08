import { FC } from 'react';

type Props = {
  score: number;
  startGame: () => void;
};

export const Starting: FC<Props> = ({ score, startGame }) => {
  return (
    <div>
      {Boolean(score) && <h2>Your Score: {score}</h2>}
      <button onClick={startGame}>{score ? 'Restart' : 'Start'}</button>
    </div>
  );
};
