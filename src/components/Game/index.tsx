import { FC, useEffect, useState } from 'react';
import { DIRECTION } from '../../types';
import { MOVES } from '../../constants';
import { Board } from '../Board';

export const Game: FC = () => {
  const [direction, setDirection] = useState<DIRECTION>(DIRECTION.UP);

  const handleKeyDown = (e: KeyboardEvent) => {
    const dir = MOVES[e.code as keyof typeof MOVES];
    if (dir) setDirection(dir);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <Board direction={direction} />;
};
