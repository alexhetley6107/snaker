import { useEffect, useState } from 'react';
import s from './Board.module.css';
import { BOARD_SIZE, DEFAULT_CELLS, initialSnake, MOVES } from '../../constants';
import { Cell } from '../Cell/Cell';
import { CELL_TYPE, Position } from '../../types';

const speed = 300;

export const Board = () => {
  const [direction, setDirection] = useState(MOVES[0]);
  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [food, setFood] = useState<Position | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    const index = MOVES.indexOf(e.key);
    if (index > -1) {
      setDirection(MOVES[index]);
    }
  };

  useEffect(() => {
    generateFood();
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = gameLoop();
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [snake]);

  const checkAvailableCell = (value: number) => {
    if (value < 0) return BOARD_SIZE - 1;
    if (value >= BOARD_SIZE) return 0;
    return value;
  };

  const generateFood = () => {
    let newFood: Position | null = null;

    do {
      const x = Math.floor(Math.random() * BOARD_SIZE);
      const y = Math.floor(Math.random() * BOARD_SIZE);
      newFood = [x, y] as Position;
    } while (snake.some((c) => c[0] === newFood?.[0] && c[1] === newFood?.[1]));

    setFood(newFood);
  };

  const gameLoop = () => {
    const timerId = setInterval(() => {
      const newSnake = snake;
      let move = [0, 0];
      switch (direction) {
        case MOVES[0]:
          move = [0, -1];
          break;
        case MOVES[1]:
          move = [1, 0];
          break;
        case MOVES[2]:
          move = [0, 1];
          break;
        case MOVES[3]:
          move = [-1, 0];
          break;
      }

      const head: Position = [
        checkAvailableCell(newSnake[newSnake.length - 1][0] + move[0]),
        checkAvailableCell(newSnake[newSnake.length - 1][1] + move[1]),
      ];

      newSnake.push(head);

      let spliceIndex = 1;

      const isEating = head[0] === food?.[0] && head[1] === food[1];
      if (isEating) {
        spliceIndex = 0;
        generateFood();
      }

      setSnake(newSnake.splice(spliceIndex));
    }, speed);

    return timerId;
  };

  return (
    <>
      {direction}
      <div className={s.row}>
        {DEFAULT_CELLS.map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((_, colIndex) => {
                let type = snake.some((c) => c[0] === rowIndex && c[1] === colIndex)
                  ? CELL_TYPE.SNAKE
                  : CELL_TYPE.EMPTY;

                const isFood =
                  type !== CELL_TYPE.SNAKE && food?.[0] === rowIndex && food[1] === colIndex;

                if (isFood) type = CELL_TYPE.FOOD;

                return <Cell key={colIndex} type={type} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
