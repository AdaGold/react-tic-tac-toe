import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  const notifyBoard = () => {
    props.onClickCallback(props.id);
  };
  
  const buttonClickedHandler = () => {
    notifyBoard();
  };
  
  return <button onClick={buttonClickedHandler} className='square'>{props.value}</button>;
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
