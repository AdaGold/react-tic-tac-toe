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

  const updateSquare = (targetSquare) => {
    return () => {
      if (targetSquare.value !== "") {
        return
      }
    
      const newSquares = squares.map(row => 
        row.map(square => {
          if (square.id === targetSquare.id) {
            return { id: square.id, value: currentPlayer }
          } else {
            return square
          }
        })
      )
      
      setSquares(newSquares)
    
      if (currentPlayer === PLAYER_1) {
        setCurrentPlayer(PLAYER_2)
      } else {
        setCurrentPlayer(PLAYER_1)
      }
    }
  }

  // If React used plain function calls instead of JSX:

  // return (
  //   div(
  //     {className: "App"},
  //     header(
  //       {className: "App-header},
  //       h1({}, "React Tic Tac Toe"),
  //       h2({}, `Current Player ${currentPlayer}`)
  //     ),
  //     main(
  //       {},
  //       Board({squares: squares, onClickCallback: updateSquare})
  //     )
  //   )
  // )

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>Current Player {currentPlayer}</h2>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateSquare} />
      </main>
    </div>
  );
}

export default App;
