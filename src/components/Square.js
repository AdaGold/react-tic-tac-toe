import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = ({ value, id }) => {
  const state = useState({ id, value })

  const updateSquare = () => {

  }

  return <button
    className="square"
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
