import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';



const generateSquareComponents = (squares, onClickCallback) => {
    const flatArray = []
    squares.forEach(row => {
      row.forEach(square => {
        flatArray.push(square)
      })
    })
    const squaresArray = flatArray.map(squareData => <Square id={squareData.id} value={squareData.value} onClickCallback={onClickCallback}/>)
    return squaresArray
}   

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
