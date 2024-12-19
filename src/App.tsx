import { Cell } from './components';
import s from './App.module.css';

const BOARD_SIZE = 20;
const DEFAULT_CELLS: number[][] = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));

function App() {
  return (
    <div>
      {DEFAULT_CELLS.map((row, rowIndex) => {
        return (
          <div className={s.row} key={rowIndex}>
            {row.map((_, i) => {
              return <Cell key={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
