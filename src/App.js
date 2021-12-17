import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

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
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1);
  const [checkWinner, setCheckWinner] = useState(false);
  const [winner, setWinner] = useState('');
  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  // id can be called directly bc generateSquares() get called
  const updateSquare = (id) => {
    const sqs = squares.map((rows) =>
      rows.map((singleSquare) => {
        if (singleSquare.id === id) {
          if (player === PLAYER_1 && singleSquare.value === '') {
            singleSquare.value = 'x';
          } else if (player === PLAYER_2 && singleSquare.value === '') {
            singleSquare.value = 'o';
          }
        }

        return singleSquare;
      })
    );

    setPlayer(player === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    setSquares(sqs);
    setWinner(pickWinner(checkForWinner()));
  };

  // let player === PLAYER_1
  // const updateSquare = id => {
  //   setSquares(
  //       for (let row = 0; row < 3; row += 1){
  //             for (let col = 0; col < 3; col += 1){
  //                 (singleSquare) => {
  //                   if (singleSquare.id === id ) {
  //                       if (PLAYER_1 === player) {
  //                         singleSquare.value = 'x';}
  //                       else if (PLAYER_2 === player) {
  //                         singleSquare.value = 'o';}
  //                       player === PLAYER_1? PLAYER_2: PLAYER_1
  //                   }
  //                 }
  //             }
  //       }
  //   )
  //   return singleSquare;
  //   };

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

  // wave3
  const pickWinner = (checkForWinner) => {
    if (checkForWinner === 'x') {
      setCheckWinner(true);
      return PLAYER_1;
    } else if (checkForWinner === 'o') {
      setCheckWinner(true);
      return PLAYER_2;
    } else if (checkForWinner === null) {
      return '';
    }
  };

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Winner is {winner} </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board
          squares={squares}
          onClickCallback={updateSquare}
          checkWinner={checkWinner}
        ></Board>
      </main>
    </div>
  );
};

export default App;
