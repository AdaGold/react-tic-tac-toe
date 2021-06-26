import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }
  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  
  const [squares, setSquares] = useState(generateSquares());
  const [player, changePlayer] = useState(PLAYER_1);

  const checkForWinner = (squares) => {

    // for i in range(3):
    for (let i = 0; i < 3; i++) {
      // rows
      if (squares[i][0].value === squares[i][1].value && (squares[i][0].value === squares[i][2].value) && (squares[i][0].value !== '')) {
        return squares[i][0].value
      // columns
      } else if (squares[0][i].value === squares[1][i].value && (squares[0][i].value === squares[2][i].value) && (squares[0][i].value !== '')) {
        return squares[0][i].value
    }
  }
      // diagonals
    if (squares[0][0].value === squares[1][1].value && (squares[0][0].value === squares[2][2].value) && (squares[0][0].value !== '')) {
      return squares[0][0].value
    } else if (squares[0][2].value === squares[1][1].value && (squares[0][2].value === squares[2][0].value) && (squares[0][2].value !== '')) {
      return squares[0][2].value
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (squares[i][j].value === '') {
          return null
        }
      } 
    } 
    return 'Tie'
  }

  const resetGame = () => {
    // Complete in Wave 4
  }
  const updateSquareValue = (id) => {
      //make a copy of squares and flatten it
      const squaresCopy = [...squares].flat()
      //identify which square has been clicked
      const activeSquare = squaresCopy.find( (square) => id === square.id );
      //change the value of the clicked square only if its value is empty
      if (activeSquare.value === '') {
        activeSquare.value = player
    };
      //re-render the board with the updated square value
      setSquares([...squares]);
      //ternary operator - if player = X then change to O, else change to X
      changePlayer(  player === PLAYER_1 ? PLAYER_2 : PLAYER_1)


  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... {checkForWinner(squares)} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquareValue}/>
      </main>
    </div>
  );
}

export default App;
