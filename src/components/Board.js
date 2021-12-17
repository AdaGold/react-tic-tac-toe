import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

// This turns the 2D array into a 1D array

// wave 2 pass to Square
// props is { squares, onClickCallback, checkWinner }
const Board = ({ squares, onClickCallback, checkWinner }) => {
  const generateSquareComponents = (squares, onClickCallback) => {
    //  concat, extend to [1,2,3,4,5,6,7,8]
    // ...squares make new copy, then use concat join
    // const arr1 = ["Cecilie", "Lone"];
    // const arr2 = ["Emil", "Tobias", "Linus"];
    // const arr3 = ["Robin"];
    // const children = arr1.concat(arr2,arr3);
    // Cecilie,Lone,Emil,Tobias,Linus,Robin
    const singleArraySquares = [].concat(...squares);
    return singleArraySquares.map((square) => {
      return (
        <Square
          value={square.value}
          id={square.id}
          // if checkWinner is true, not go to onClickCallback, go null instead!!!
          onClickCallback={checkWinner ? null : onClickCallback}
          // For list of components need key:
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
