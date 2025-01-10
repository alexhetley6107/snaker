import { FC, useEffect, useState } from 'react';
import { DIRECTION } from '../../types';
import { MOVES, OPPOSITE_DIRECTIONS } from '../../constants';
import { Board } from '../Board';
import { DirectionArrows } from '../DirectionArrows';
import s from './Game.module.css';

type Props = {
  score: number;
  addPoint: () => void;
  stopGame: () => void;
};

export const Game: FC<Props> = ({ score, addPoint, stopGame }) => {
  const [direction, setDirection] = useState<DIRECTION>(DIRECTION.UP);

  const changeDirection = (dir: DIRECTION) => {
    setDirection((d) => {
      return dir === OPPOSITE_DIRECTIONS[d] ? d : dir;
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const dir = MOVES[e.code as keyof typeof MOVES];
    if (!dir) return;
    changeDirection(dir);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.game}>
      {score}
      <Board direction={direction} addPoint={addPoint} stopGame={stopGame} />
      <DirectionArrows direction={direction} setDirection={changeDirection} />
    </div>
  );
};
