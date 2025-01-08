import { Position } from '../types';

export const BOARD_SIZE = 20;
export const DEFAULT_CELLS: number[][] = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));

export const MOVES = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];

export const initialSnake: Position[] = [
  [10, 10],
  [10, 11],
  [10, 12],
];
