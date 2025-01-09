import { FC } from 'react';
import { DIRECTION } from '../../types';
import s from './DirectionArrows.module.css';

type Props = {
  direction: DIRECTION;
  setDirection: (d: DIRECTION) => void;
};

export const DirectionArrows: FC<Props> = ({ setDirection }) => {
  return (
    <div className={s.arrows}>
      <button onClick={() => setDirection(DIRECTION.LEFT)}>LEFT</button>
      <div>
        <button onClick={() => setDirection(DIRECTION.UP)}>UP</button>
        <button onClick={() => setDirection(DIRECTION.DOWN)}>DOWN</button>
      </div>
      <button onClick={() => setDirection(DIRECTION.RIGHT)}>RIGHT</button>
    </div>
  );
};
