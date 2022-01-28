import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Board from './Board';
import { render, screen, fireEvent} from '@testing-library/react'

// Sample input to the Board component
const SAMPLE_BOARD = [
  [
    {
      value: 'X',
      id: 0,
    },
    {
      value: 'X',
      id: 1,
    },
    {
      value: 'O',
      id: 2,
    },
  ],
  [
    {
      value: 'X',
      id: 3,
    },
    {
      value: 'X',
      id: 4,
    },
    {
      value: 'O',
      id: 5,
    },
  ],
  [
    {
      value: 'O',
      id: 6,
    },
    {
      value: 'O',
      id: 7,
    },
    {
      value: 'X',
      id: 8,
    },
  ],    
];

describe('Wave 1: Board', () => {

  test('that board will render with the proper number of Xs and Os', () => {
    // Act
    render(<Board squares={SAMPLE_BOARD} onClickCallback={() => { }} />);
      
    // Assert
    const xSquares = screen.getAllByText('X');
    expect(xSquares.length).toEqual(5);

    const oSquares = screen.getAllByText('O');
    expect(oSquares.length).toEqual(4);
  });

  test('that the board can render empty squares', () => {
    // Arrange
    const emptyBoard = SAMPLE_BOARD.map((row) => {
      return row.map((square) => {
        return {
          ...square,
          value: '',
        }
      });
    });

    // Act
    const { container } = render(<Board squares={emptyBoard} onClickCallback={() => { }} />);

    // Assert
    const buttons = container.querySelectorAll('.grid button');
    expect(buttons.length).toEqual(9);
  });
});
describe('Wave 2: Board', () => {
  describe('button click callbacks', () => {
    test('that the callback is called for the 1st button', () => {
      // Arrange
      const callback = jest.fn();
      const { container } = render(<Board squares={SAMPLE_BOARD} onClickCallback={callback} />);
      const buttons = container.querySelectorAll('.grid button');

      // Act
      fireEvent.click(buttons[0]);

      // Assert
      expect(callback).toHaveBeenCalled();
    });

    test('that the callback is called for the last button', () => {
      // Arrange
      const callback = jest.fn();
      const { container } = render(<Board squares={SAMPLE_BOARD} onClickCallback={callback} />);
      const buttons = container.querySelectorAll('.grid button');

      // Act
      fireEvent.click(buttons[buttons.length - 1]);

      // Assert
      expect(callback).toHaveBeenCalled();
    });
  });
});