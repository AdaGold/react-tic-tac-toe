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

  const [squares, setSquares] = useState(generateSquares());

  // Wave 1
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback


  const checkForWinner = () => {
    // Complete in Wave 2

  }

  const resetGame = () => {
    // Complete in Wave 3
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 2 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} />
      </main>
    </div>
  );
}



export default App;
