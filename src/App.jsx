import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import './components/winner';
import { calculateWinner } from './components/winner';

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));
  const [isxNext, setisxNext] = useState(true);
  // console.log(board);
  const winner = calculateWinner(board);
  const Message = winner
    ? `Winner is ${winner}`
    : ` Player ${isxNext ? 'X' : 'O'} turn`;
  // console.log(winner, Message);
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setboard(prev => {
      return prev.map((square, index) => {
        if (index === position) {
          return isxNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setisxNext(prev => {
      return !prev;
    });
  };
  return (
    <div className="app">
      <h1>Tic Toe Game</h1>
      <h1>{Message}</h1>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
