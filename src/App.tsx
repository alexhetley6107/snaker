import { useState } from 'react';
import { Game } from './components/Game';
import { Starting } from './components/Starting';

function App() {
  const [isGame, setIsGame] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setIsGame(true);
    setScore(0);
  };

  const stopGame = () => setIsGame(false);
  const addPoint = () => setScore((s) => ++s);

  if (isGame) return <Game addPoint={addPoint} stopGame={stopGame} score={score} />;

  return <Starting startGame={startGame} score={score} />;
}

export default App;
