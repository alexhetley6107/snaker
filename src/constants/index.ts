import { DIRECTION, Position } from '../types';

export const SPEED = 400;

export const BOARD_SIZE = 20;
export const DEFAULT_CELLS: number[][] = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));

export const initialSnake: Position[] = [[BOARD_SIZE / 2, BOARD_SIZE / 2]];

export const MOVES = {
  ArrowUp: DIRECTION.UP,
  ArrowRight: DIRECTION.RIGHT,
  ArrowDown: DIRECTION.DOWN,
  ArrowLeft: DIRECTION.LEFT,
  KeyW: DIRECTION.UP,
  KeyD: DIRECTION.RIGHT,
  KeyS: DIRECTION.DOWN,
  KeyA: DIRECTION.LEFT,
};

export const OPPOSITE_DIRECTIONS: { [key in DIRECTION]: DIRECTION } = {
  [DIRECTION.UP]: DIRECTION.DOWN,
  [DIRECTION.RIGHT]: DIRECTION.LEFT,
  [DIRECTION.DOWN]: DIRECTION.UP,
  [DIRECTION.LEFT]: DIRECTION.RIGHT,
};
