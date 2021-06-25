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

  const updateSquares = (id) => {
    const newSquares = [...squares]
    let row = 0;
    let col = 0;
    let found = false;

    while (row < 3){// && found === false){
      while (col < 3){// && found === false) {
        let currentSquare = newSquares[row][col];
        if (currentSquare.id === id){
          currentSquare.value = currentPlayer
          found = true

          if (currentPlayer === PLAYER_1){
            setCurrentPlayer(PLAYER_2)
          } else {
            setCurrentPlayer(PLAYER_1)
          }

        }
        col +=1
      }
      row+=1
      col = 0 
    } 
    setSquares(newSquares)
    console.log(squares)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>`Current Player ${ currentPlayer }`</h2>
      </header>
      <main>
        <Board 
        squares={squares} 
        currentPlayer={currentPlayer} 
        onClickCallback={updateSquares}/>
      </main>
    </div>
  );
}

export default App;
