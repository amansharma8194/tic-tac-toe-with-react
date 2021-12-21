import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import './components/winner';
import { calculateWinner } from './components/winner';
import History from './components/history';
import StatusMessage from './components/StatusMessage';
const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isxNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // console.log(current);
  const winner = calculateWinner(current.board);

  // console.log(winner, Message);
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, index) => {
        if (index === position) {
          return last.isxNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isxNext: !last.isxNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  const moveTo = index => {
    setCurrentMove(index);
  };
  return (
    <div className="app">
      <h1>Tic Toe Game</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} />
    </div>
  );
};

export default App;
