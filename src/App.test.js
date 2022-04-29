import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { render, screen, fireEvent, waitFor, prettyDOM} from '@testing-library/react'


describe('App', () => {
  // Helper function to click on buttons in the grid
  const clickButtonAndVerifyResult = (container, buttonIndex, expectedResult) => {
    let buttons = container.querySelectorAll('.grid button');
    fireEvent.click(buttons[buttonIndex]);
    
    buttons = container.querySelectorAll('.grid button');
    expect(buttons[buttonIndex].innerHTML).toEqual(expectedResult);
  }

  describe.skip('Wave 2: clicking on squares and rendering App', () => {

  test('App renders with a board of 9 empty buttons', () => {
    // Arrange-Act - Render the app
    const { container } = render(<App />);

    const buttons = container.querySelectorAll('.grid button');

    // Assert (9 buttons in the grid)
    expect(buttons.length).toEqual(9);
    buttons.forEach((button) => {
      expect(button.innerHTML).toEqual('');
    });
  });

  test('App has the header: "React Tic Tac Toe"', () => {
    // Arrange-Act
    render(<App />);

    const header = screen.getByText('React Tic Tac Toe');

    // Assert
    expect(header).toBeInTheDocument();
  });

  test('Clicking on a grid button changes the text on it to an "X"', () => {
    // Arrange
    const { container } = render(<App />);

    // Act-assert
    clickButtonAndVerifyResult(container, 0, 'X');
  });

  test('Clicking on the 1st button makes it an "X" and the 2nd an "O"', () => {
    // Arrange
    const { container } = render(<App />);

    //Act-Assert
    clickButtonAndVerifyResult(container, 0, 'X');
    clickButtonAndVerifyResult(container, 8, 'O');
  });

  test('clicking on the same square twice doesn\'t change things', () => {
    // Arrange
    const { container } = render(<App />);

    // Act
    let buttons = container.querySelectorAll('.grid button');
    fireEvent.click(buttons[0]);

    // after the click there should be a square with an "X"
    let clickedButton = screen.getByText('X');
    expect(clickedButton).toBeInTheDocument();

    buttons = container.querySelectorAll('.grid button');
    fireEvent.click(buttons[0]);

    // Assert
    // after the 2nd click there should still be a square with an "X"
    clickedButton = screen.getByText('X');
    expect(clickedButton).toBeInTheDocument();


    const xButtons = screen.queryAllByText('X');
    expect(xButtons.length).toEqual(1);
    const oButtons = screen.queryAllByText('O');
    expect(oButtons.length).toEqual(0);
  });
});

  
  describe.skip('Wave 3:  Winner tests', () => {
    describe('Prints "The winner is X" when X wins', () => {
      test('that a winner will be identified when 3 Xs get in a row across the top', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 0, 'X');
        clickButtonAndVerifyResult(container, 3, 'O');
        clickButtonAndVerifyResult(container, 2, 'X');
        clickButtonAndVerifyResult(container, 4, 'O');
        clickButtonAndVerifyResult(container, 1, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });

      test('that a winner will be identified when 3 Xs go accross the middle row', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 3, 'X');
        clickButtonAndVerifyResult(container, 1, 'O');
        clickButtonAndVerifyResult(container, 5, 'X');
        clickButtonAndVerifyResult(container, 2, 'O');
        clickButtonAndVerifyResult(container, 4, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the bottom row', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 6, 'X');
        clickButtonAndVerifyResult(container, 1, 'O');
        clickButtonAndVerifyResult(container, 8, 'X');
        clickButtonAndVerifyResult(container, 2, 'O');
        clickButtonAndVerifyResult(container, 7, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
    
      test('that a winner will be identified when 3 Xs go accross the left column', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 3, 'X');
        clickButtonAndVerifyResult(container, 1, 'O');
        clickButtonAndVerifyResult(container, 6, 'X');
        clickButtonAndVerifyResult(container, 2, 'O');
        clickButtonAndVerifyResult(container, 0, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the center column', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 4, 'X');
        clickButtonAndVerifyResult(container, 0, 'O');
        clickButtonAndVerifyResult(container, 7, 'X');
        clickButtonAndVerifyResult(container, 2, 'O');
        clickButtonAndVerifyResult(container, 1, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the right column', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 2, 'X');
        clickButtonAndVerifyResult(container, 0, 'O');
        clickButtonAndVerifyResult(container, 5, 'X');
        clickButtonAndVerifyResult(container, 1, 'O');
        clickButtonAndVerifyResult(container, 8, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });

      test('that a winner will be identified when 3 Xs go accross the top-left to bottom-right', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 0, 'X');
        clickButtonAndVerifyResult(container, 1, 'O');
        clickButtonAndVerifyResult(container, 4, 'X');
        clickButtonAndVerifyResult(container, 2, 'O');
        clickButtonAndVerifyResult(container, 8, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the top-right to bottom-left', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 2, 'X');
        clickButtonAndVerifyResult(container, 0, 'O');
        clickButtonAndVerifyResult(container, 4, 'X');
        clickButtonAndVerifyResult(container, 3, 'O');
        clickButtonAndVerifyResult(container, 6, 'X');

        // Assert
        const winnerScreen = screen.queryByText('The winner is X')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
    });
  });


  describe('Prints "The winner is O" when o wins', () => {
    test('that a winner will be identified when 3 os get in a row across the top', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 3, 'X');
      clickButtonAndVerifyResult(container, 0, 'O');
      clickButtonAndVerifyResult(container, 4, 'X');
      clickButtonAndVerifyResult(container, 1, 'O');
      clickButtonAndVerifyResult(container, 6, 'X');
      clickButtonAndVerifyResult(container, 2, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });

    test('that a winner will be identified when 3 Os go accross the middle row', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 1, 'X');
      clickButtonAndVerifyResult(container, 3, 'O');
      clickButtonAndVerifyResult(container, 0, 'X');
      clickButtonAndVerifyResult(container, 4, 'O');
      clickButtonAndVerifyResult(container, 8, 'X');
      clickButtonAndVerifyResult(container, 5, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    test('that a winner will be identified when 3 Os go accross the bottom row', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 0, 'X');
      clickButtonAndVerifyResult(container, 6, 'O');
      clickButtonAndVerifyResult(container, 1, 'X');
      clickButtonAndVerifyResult(container, 8, 'O');
      clickButtonAndVerifyResult(container, 4, 'X');
      clickButtonAndVerifyResult(container, 7, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    
    test('that a winner will be identified when 3 Os go accross the left column', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 4, 'X');
      clickButtonAndVerifyResult(container, 3, 'O');
      clickButtonAndVerifyResult(container, 8, 'X');
      clickButtonAndVerifyResult(container, 0, 'O');
      clickButtonAndVerifyResult(container, 1, 'X');
      clickButtonAndVerifyResult(container, 6, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    test('that a winner will be identified when 3 Os go accross the center column', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 3, 'X');
      clickButtonAndVerifyResult(container, 4, 'O');
      clickButtonAndVerifyResult(container, 6, 'X');
      clickButtonAndVerifyResult(container, 1, 'O');
      clickButtonAndVerifyResult(container, 5, 'X');
      clickButtonAndVerifyResult(container, 7, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    test('that a winner will be identified when 3 Os go accross the right column', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 1, 'X');
      clickButtonAndVerifyResult(container, 2, 'O');
      clickButtonAndVerifyResult(container, 0, 'X');
      clickButtonAndVerifyResult(container, 5, 'O');
      clickButtonAndVerifyResult(container, 7, 'X');
      clickButtonAndVerifyResult(container, 8, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });    

    test('that a winner will be identified when 3 Os go accross the top-left to bottom-right', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 1, 'X');
      clickButtonAndVerifyResult(container, 0, 'O');
      clickButtonAndVerifyResult(container, 3, 'X');
      clickButtonAndVerifyResult(container, 4, 'O');
      clickButtonAndVerifyResult(container, 7, 'X');
      clickButtonAndVerifyResult(container, 8, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });  
    test('that a winner will be identified when 3 Os go accross the top-right to bottom-left', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 0, 'X');
      clickButtonAndVerifyResult(container, 2, 'O');
      clickButtonAndVerifyResult(container, 3, 'X');
      clickButtonAndVerifyResult(container, 4, 'O');
      clickButtonAndVerifyResult(container, 7, 'X');
      clickButtonAndVerifyResult(container, 6, 'O');

      // Assert
      const winnerScreen = screen.queryByText('The winner is O')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });       
  });

  describe.skip('Wave 4:  reset game button', () => {
    test('App has a "Reset Game" button', () => {
      // Arrange-Act
      render(<App />);
  
      const resetButton = screen.getByText('Reset Game');
  
      // Assert
      expect(resetButton).toBeInTheDocument();
    });
  
    test('the button resets the game', () => {
      // Arrange - click on some squares
      const { container } = render(<App />);
      clickButtonAndVerifyResult(container, 0, 'X');
      clickButtonAndVerifyResult(container, 2, 'O');

      // Find the reset button
      const resetButton = screen.queryByText(/[Rr]eset\s+[Gg]ame/);

      // Act - Click the reset button
      fireEvent.click(resetButton);

      // Assert - There should no longer be Xs or Os 
      // on the board.
      const xSquare = screen.queryByText('X');
      expect(xSquare).toBeNull();

      const oSquare = screen.queryByText('O');
      expect(oSquare).toBeNull();
    });
  });
});