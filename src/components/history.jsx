import React from 'react';
const History = ({ history, moveTo }) => {
  return (
    <ul className="history">
      {history.map((_, index) => {
        return (
          <li key={index}>
            <button
              className="hist-Btn"
              type="button"
              onClick={() => {
                moveTo(index);
              }}
            >
              {index === 0 ? 'Go to Game' : `Go to Step ${index}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default History;
