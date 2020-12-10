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
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [numSquaresFilled, setNumSquaresFilled] = useState(0);
  const [winner, setWinner] = useState(null);

  const checkForWinner = () => {
    let i = 0;

    // Check all the rows and columns for a winner
    while (i < 3) {
      if (squares[i][0].value === squares[i][1].value &&
        squares[i][2].value === squares[i][1].value &&
        squares[i][0].value !== '') {
        return squares[i][0].value;
      } else if (squares[0][i].value === squares[1][i].value &&
        squares[2][i].value === squares[1][i].value &&
        squares[0][i].value !== '') {
        return squares[0][i].value;
      }
      i += 1;
    }
    // Check Top-Left to bottom-right diagonal
    if (squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== '') {
      return squares[0][0].value;
    }

    // Check Top-right to bottom-left diagonal
    if (squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== '') {
      return squares[0][2].value;
    }

    return null;
  }
  const updateSquares = (id) => {
    if (winner !== null) return;

    const newSquares = [...squares];
    let row = 0;
    let col = 0;
    let found = false;

    while (row < 3 && !found) {
      while (col < 3 && !found) {
        let currentSquare = newSquares[row][col];
        if (currentSquare.id === id) {
          if (currentSquare.value !== '') return;

          found = true;
          currentSquare.value = currentPlayer;
          setNumSquaresFilled(numSquaresFilled + 1);
          if (currentPlayer === PLAYER_1) {
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1);
          }
        }
        col += 1;
      }
      row += 1;
      col = 0;
    }
    setWinner(checkForWinner());
    setSquares(newSquares);
  }
  const resetGame = () => {
    setSquares(generateSquares());
    setCurrentPlayer(PLAYER_1);
    setNumSquaresFilled(0);
    setWinner(null);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>{winner === null ? `Current Player ${ currentPlayer }` : `Winner is ${ winner }`}</h2>
        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquares} />
      </main>
    </div>
  );
}

export default App;