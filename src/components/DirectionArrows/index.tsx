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
      <button className={s.left} onClick={() => setDirection(DIRECTION.LEFT)}>
        <img src="./arrow.svg" alt="arrow" />
      </button>
      <div className={s.centered}>
        <button className={s.up} onClick={() => setDirection(DIRECTION.UP)}>
          <img src="./arrow.svg" alt="arrow" />
        </button>
        <button className={s.down} onClick={() => setDirection(DIRECTION.DOWN)}>
          <img src="./arrow.svg" alt="arrow" />
        </button>
      </div>
      <button className={s.right} onClick={() => setDirection(DIRECTION.RIGHT)}>
        <img src="./arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};
