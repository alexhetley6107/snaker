import { FC } from 'react';
import s from './Cell.module.css';
import { CELL_TYPE } from '../../types';

type Props = {
  type: CELL_TYPE;
};

export const Cell: FC<Props> = ({ type = CELL_TYPE.EMPTY }) => {
  const className = `${s.cell} ${s[type]}`;
  return <div className={className} />;
};
