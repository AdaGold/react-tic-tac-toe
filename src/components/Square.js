import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const passId = () => {
    props.onClickCallback(props.id)
  }
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  return <button className="square" onClick={passId}> 
  {/* onClick={() => props.onClickCallback(props.id)} */}
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
