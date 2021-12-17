import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

const Square = (props) => {
  // For Wave 1 enable this 
  //  Component to alert a parent 
  //  component when it's clicked on.

  // props.onClickCallback(props.id) cannot fill directly?
  const clickHandler = () => {
    props.onClickCallback(props.id);
  };
  // wave2
  return (
    <button className='square'   
      onClick={clickHandler}>{props.value}
    </button>
  );
  };

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square;
