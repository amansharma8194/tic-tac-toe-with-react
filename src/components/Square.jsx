import React from 'react';

const Square = ({ value, event }) => {
  return (
    <button type="button" className="square" onClick={event}>
      {value}
    </button>
  );
};

export default Square;
