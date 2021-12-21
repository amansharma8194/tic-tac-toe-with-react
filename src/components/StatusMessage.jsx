import React from 'react';

const StatusMessage = ({ winner, current }) => {
  // const Message = winner
  // ? `Winner is ${winner}`
  // : ` Player ${history.isxNext ? 'X' : 'O'} turn`;
  const noSpace = current.board.every(el => el !== null);
  // console.log(noSpace);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noSpace && ` Player ${current.isxNext ? 'X' : 'O'} turn`}
      {!winner && noSpace && 'DRAW'}
    </h2>
  );
};

export default StatusMessage;
