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

  const [squares, setSquares] = useState(generateSquares());
  const [player, setPlayer] = useState(PLAYER_1);
  const [checkWinner, setCheckWinner] = useState(false);
  const [winner, setWinner] = useState('');

  const updateSquare = (id) => {

    // stop changing state
    if (winner) {
      return;
    }

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




// const handleSquareClick = (id) => {
//   const newSquares = [...squares];
//   for(let row of newSquares) {
//     for(let col of row) {
//       if (col.id === id) {
//         col.value = player;
//       }
//     }
//   }
//   if (player === player1) {
//     setPlayer(player2);
//   } else {setPlayer(player1);}
//   setSquares(newSquares);

// }


  const checkForWinner = () => {
    let i = 0;

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

    if (
      squares[0][0].value === squares[1][1].value &&
      squares[2][2].value === squares[1][1].value &&
      squares[1][1].value !== ''
    ) {
      return squares[0][0].value;
    }


    if (
      squares[0][2].value === squares[1][1].value &&
      squares[2][0].value === squares[1][1].value &&
      squares[1][1].value !== ''
    ) {
      return squares[0][2].value;
    }

    return null;
  };


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
