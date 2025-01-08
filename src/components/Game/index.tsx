import { FC, useEffect, useState } from 'react';
import { DIRECTION } from '../../types';
import { MOVES, OPPOSITE_DIRECTIONS } from '../../constants';
import { Board } from '../Board';

type Props = {
  score: number;
  addPoint: () => void;
  stopGame: () => void;
};

export const Game: FC<Props> = ({ score, addPoint, stopGame }) => {
  const [direction, setDirection] = useState<DIRECTION>(DIRECTION.UP);

  const handleKeyDown = (e: KeyboardEvent) => {
    const dir = MOVES[e.code as keyof typeof MOVES];
    if (!dir) return;

    setDirection((d) => {
      return dir === OPPOSITE_DIRECTIONS[d] ? d : dir;
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {score}
      <Board direction={direction} addPoint={addPoint} stopGame={stopGame} />
    </>
  );
};
