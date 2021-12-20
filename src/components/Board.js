import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


const Board = ({ squares, onClickCallback, checkWinner }) => {
  const generateSquareComponents = (squares, onClickCallback) => {
    const singleArraySquares = [].concat(...squares);
    return singleArraySquares.map((square) => {
      return (
        <Square
          value={square.value}
          id={square.id}
          onClickCallback={checkWinner ? null : onClickCallback}
          key={square.id}
        />
      );
    });
  };

  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid">{squareList}</div>;
};

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
  checkWinner: PropTypes.bool.isRequired,
};

export default Board;
