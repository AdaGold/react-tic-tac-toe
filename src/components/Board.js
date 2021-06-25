import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';


// const generateSquares = (squares, onClickCallback) => {
//   const singleArraySquares = [].concat(...squares);
//   return singleArraySquares.map((square) => {
//     return <Square
//       value={square.value}
//       id={square.id}
//       key={square.id}
//       onClickCallback={onClickCallback}
//     />
//   });
// }

const Board = (props) => {

  const singleArraySquares = [].concat(...props.squares);
  const squareList = singleArraySquares.map((square) => {
    return <Square
      value={square.value}
      id={square.id}
      key={square.id}
      onClickCallback={props.onClickCallback}
    />
  });
  //const squareList = generateSquares(props.squares, props.onClickCallback);
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
