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
};

const App = () => {
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);

  // Wave 2

  const resetGame = () => {
    setSquares(generateSquares());
  };

  const checkForWinner = (squares) => {
    if (
      squares[0][0].value === squares[0][1].value &&
      squares[0][1].value === squares[0][2].value &&
      squares[0][2].value !== ''
    ) {
      return squares[0][0].value;
    } else if (
      squares[1][0].value === squares[1][1].value &&
      squares[1][1].value === squares[1][2].value &&
      squares[1][2].value !== ''
    ) {
      return squares[1][0].value;
    } else if (
      squares[2][0].value === squares[2][1].value &&
      squares[2][1].value === squares[2][2].value &&
      squares[2][2].value !== ''
    ) {
      return squares[2][0].value;
    } else if (
      squares[0][0].value === squares[1][0].value &&
      squares[1][0].value === squares[2][0].value &&
      squares[2][0].value !== ''
    ) {
      return squares[0][0].value;
    } else if (
      squares[0][1].value === squares[1][1].value &&
      squares[1][1].value === squares[2][1].value &&
      squares[2][1].value !== ''
    ) {
      return squares[0][1].value;
    } else if (
      squares[0][2].value === squares[1][2].value &&
      squares[1][2].value === squares[2][2].value &&
      squares[2][2].value !== ''
    ) {
      return squares[0][2].value;
    } else if (
      squares[0][0].value === squares[1][1].value &&
      squares[1][1].value === squares[2][2].value &&
      squares[2][2].value !== ''
    ) {
      return squares[0][0].value;
    } else if (
      squares[0][2].value === squares[1][1].value &&
      squares[1][1].value === squares[2][0].value &&
      squares[2][0].value !== ''
    ) {
      return squares[0][2].value;
    } else {
      return false;
    }
  };

  const updateSquare = (updatedSquare) => {
    const updatedSquares = [[], [], []];
    squares.forEach((rows, i) => {
      rows.forEach((square) => {
        if (square.id === updatedSquare.id && square.value === '') {
          updatedSquare.value = currentPlayer;
          updatedSquares[i].push(updatedSquare);
        } else {
          updatedSquares[i].push(square);
        }
      });
    });

    currentPlayer === PLAYER_1
      ? setCurrentPlayer(PLAYER_2)
      : setCurrentPlayer(PLAYER_1);
    setSquares(updatedSquares);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner(squares)}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
};

export default App;
