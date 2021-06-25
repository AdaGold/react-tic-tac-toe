import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ value, id, onClickCallback }) => {
  return <button
    className="square"
    onClick={onClickCallback(id, value)}
  >
    {value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
