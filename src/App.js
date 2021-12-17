import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const Player1 = '❌ ';
const Player2 = '🅾️';

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
  const [turn] = useState ({playerTurn: false});
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
    const newSquare = squares.map((square) => {
      for (let eachSquare of square) {
        if (eachSquare.id === id && eachSquare.value === '' && !winner) {
          eachSquare.value = getCurrentPlayer();
          if (checkForWinner() !== null) {
            setWinner(checkForWinner());
          }
          }
        }
        return square;
      });
      setSquares(newSquare);
    
  };
  const getCurrentPlayer = () => {
    turn.playerTurn = !turn.playerTurn;
    
    if (turn.playerTurn) {
      console.log(Player1);
      return Player1;
    } else {
      console.log(Player2);
      return Player2;
    }
  };


  const resetGame = () => {
    setSquares(generateSquares());
    setWinner(null);
  };


  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Tres en linea</h1>
{/* will display current player until winner is determined */}
        <h2><h2>
          {winner === null
            ? `El jugador es ${getCurrentPlayer()}`
            : `Winner is ${winner} 🥳`}
        </h2></h2>

        <button onClick={() => resetGame()}>Reiniciar el juego</button>
      </header>
      <main>
        {/* pass method through */}
        <Board onClickCallback={changeSquare} squares={squares} />
      </main>
    </div>
  );
};

export default App;
