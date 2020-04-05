import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];
  let row = 0;
  let col = 0;
  let currentId = 0;
  console.log(`row = ${ row }`);

  while (row < 3) {
    squares.push([]);
    while (col < 3) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      col += 1;
      currentId += 1;
    }
    row += 1;
    col = 0;
  }

  return squares;
}

const App = () => {
  return <div />
};


export default App;
