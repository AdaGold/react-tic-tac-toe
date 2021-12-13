import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// This turns the 2D array into a 1D array
const generateSquareComponents = (squares, onClickCallback) => {
  const singleArraySquares = [].concat(...squares);
  return singleArraySquares.map((square) => {
    return (
      <Square
        value={square.value}
        id={square.id}
        onClickCallback={onClickCallback}
        key={square.id}
      />
    );
  });
};

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className='grid'>{squareList}</div>;
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
};

export default Board;
