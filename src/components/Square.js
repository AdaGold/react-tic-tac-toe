import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const onSquareClick = () => {
    const updatedSquare = {
      //value: props.value,
      value: 'X',
      id: props.id
    }
    //console.log("square clicked")
    console.log(props.id)
    props.onClickCallback(updatedSquare);
  }

  return <button className="square" onClick={onSquareClick}>
    {props.value} 
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square