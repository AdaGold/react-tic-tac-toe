import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const Player1 = 'x';
const Player2 = 'o';

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
  console.log(squares,'here');
  return squares;
};


const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(Player1);
  const [winner, setWinner] = useState(null);
  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  
  const checkForWinner = () => {
    let i = 0;

    // Check all the rows and columns for a winner
    while (i < 3) {
      if (
        squares[i][0].value === squares[i][1].value &&
        squares[i][2].value === squares[i][1].value &&
        squares[i][0].value !== ''
      ) {
        return squares[i][0].value;
      } else if (
        squares[0][i].value === squares[1][i].value &&
        squares[2][i].value === squares[1][i].value &&
        squares[0][i].value !== ''
      ) {
        return squares[0][i].value;
      }
      i += 1;
    }
    // Check Top-Left to bottom-right diagonal
    if (
      squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== ''
    ) {
      return squares[0][0].value;
    }

    // Check Top-right to bottom-left diagonal
    if (
      squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== ''
    ) {
      return squares[0][2].value;
    }

    return null;
  };
  // create function method to show x, o when player clicks 
  const changeSquare = (id) => {
    console.log('onclick', id);
    setSquares((squares) => {
    let newGame = squares.map((square) => {
      for (let property of square) {
        if (property.id === id && property.value === '') {
         if (currentPlayer === Player1) {
           property.value = Player1;
         } else if (currentPlayer  === Player2) {
            property.value = Player2;
          }
          }
        }
        return square;
      });
      setWinner(checkForWinner());
      return newGame;
    });
    // set current player
    if (currentPlayer === Player1) {
      setCurrentPlayer(Player2);
    } else {
      setCurrentPlayer(Player1);
    }
  };

// will reset game, player, board
  const resetGame = () => {
    setSquares(generateSquares());
    setWinner(null);
    setCurrentPlayer(Player1);
  };

  


  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tic Tac Toe</h1>
{/* will display current player until winner is determined */}
        <h2><h2>
          {winner === null
            ? `The current player is ${setCurrentPlayer}`
            : `Winner is ${winner}`}
            {/* does not display simultaneously */}
        </h2></h2>

        <button onClick={resetGame}>Reset Game</button>
      </header>
      <main>
        {/* pass method through */}
        <Board onClickCallback={changeSquare} squares={squares} />
      </main>
    </div>
  );
};

export default App;
