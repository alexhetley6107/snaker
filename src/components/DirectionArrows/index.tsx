import { FC } from 'react';
import { DIRECTION } from '../../types';
import s from './DirectionArrows.module.css';

type Props = {
  direction: DIRECTION;
  setDirection: (d: DIRECTION) => void;
};

export const DirectionArrows: FC<Props> = ({ direction, setDirection }) => {
  const getBtnClassname = (baseClass: string, dir: DIRECTION) => {
    return direction === dir ? [baseClass, s.active].join(' ') : baseClass;
  };

  return (
    <div className={s.arrows}>
      <button
        className={getBtnClassname(s.left, DIRECTION.LEFT)}
        onMouseDown={() => setDirection(DIRECTION.LEFT)}
      >
        <img src="./arrow.svg" alt="arrow" />
      </button>
      <div className={s.centered}>
        <button
          className={getBtnClassname(s.up, DIRECTION.UP)}
          onMouseDown={() => setDirection(DIRECTION.UP)}
        >
          <img src="./arrow.svg" alt="arrow" />
        </button>
        <button
          className={getBtnClassname(s.down, DIRECTION.DOWN)}
          onMouseDown={() => setDirection(DIRECTION.DOWN)}
        >
          <img src="./arrow.svg" alt="arrow" />
        </button>
      </div>
      <button
        className={getBtnClassname(s.right, DIRECTION.RIGHT)}
        onMouseDown={() => setDirection(DIRECTION.RIGHT)}
      >
        <img src="./arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};
