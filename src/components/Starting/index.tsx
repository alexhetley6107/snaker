import { FC } from 'react';
import s from './Starting.module.css';

type Props = {
  score: number;
  startGame: () => void;
};

export const Starting: FC<Props> = ({ score, startGame }) => {
  return (
    <div className={s.starting}>
      {Boolean(score) && <h2>Your Score: {score}</h2>}
      <button onClick={startGame}>{score ? 'Restart' : 'Start'}</button>
    </div>
  );
};
