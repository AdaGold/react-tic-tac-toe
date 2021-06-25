import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Square.css'

//const Square = ({ value, id, currentPlayer }) => {
const Square = (props) => {
  //const state = useState({ id, value })
  //const [value, setValue] = useState(props.value)

  const updateSquare = () => {
    //setValue('x')
    //console.log("clicked square")
    props.onClickCallback(props.id)
  }

  return <button
    className="square"
    onClick={updateSquare}
    //onClick={()=>props.onClickCallback()} 
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
