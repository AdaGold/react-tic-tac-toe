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

  describe('Wave 2: clicking on squares and rendering App', () => {

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

  test('Clicking on a grid button changes the text on it to an "x"', () => {
    // Arrange
    const { container } = render(<App />);

    // Act-assert
    clickButtonAndVerifyResult(container, 0, 'x');
  });

  test('Clicking on the 1st button makes it an "x" and the 2nd an "o"', () => {
    // Arrange
    const { container } = render(<App />);

    //Act-Assert
    clickButtonAndVerifyResult(container, 0, 'x');
    clickButtonAndVerifyResult(container, 8, 'o');
  });

  test('clicking on the same square twice doesn\'t change things', () => {
    // Arrange
    const { container } = render(<App />);

    // Act
    let buttons = container.querySelectorAll('.grid button');
    fireEvent.click(buttons[0]);

    // after the click there should be a square with an "x"
    let clickedButton = screen.getByText('x');
    expect(clickedButton).toBeInTheDocument();

    buttons = container.querySelectorAll('.grid button');
    fireEvent.click(buttons[0]);

    // Assert
    // after the 2nd click there should still be a square with an "x"
    clickedButton = screen.getByText('x');
    expect(clickedButton).toBeInTheDocument();


    const xButtons = screen.queryAllByText('x');
    expect(xButtons.length).toEqual(1);
    const oButtons = screen.queryAllByText('o');
    expect(oButtons.length).toEqual(0);
  });
});

  
  describe('Wave 3:  Winner tests', () => {
    describe('Prints "Winner is x" when x wins', () => {
      test('that a winner will be identified when 3 Xs get in a row across the top', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 0, 'x');
        clickButtonAndVerifyResult(container, 3, 'o');
        clickButtonAndVerifyResult(container, 2, 'x');
        clickButtonAndVerifyResult(container, 4, 'o');
        clickButtonAndVerifyResult(container, 1, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });

      test('that a winner will be identified when 3 Xs go accross the middle row', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 3, 'x');
        clickButtonAndVerifyResult(container, 1, 'o');
        clickButtonAndVerifyResult(container, 5, 'x');
        clickButtonAndVerifyResult(container, 2, 'o');
        clickButtonAndVerifyResult(container, 4, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the bottom row', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 6, 'x');
        clickButtonAndVerifyResult(container, 1, 'o');
        clickButtonAndVerifyResult(container, 8, 'x');
        clickButtonAndVerifyResult(container, 2, 'o');
        clickButtonAndVerifyResult(container, 7, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
    
      test('that a winner will be identified when 3 Xs go accross the left column', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 3, 'x');
        clickButtonAndVerifyResult(container, 1, 'o');
        clickButtonAndVerifyResult(container, 6, 'x');
        clickButtonAndVerifyResult(container, 2, 'o');
        clickButtonAndVerifyResult(container, 0, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the center column', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 4, 'x');
        clickButtonAndVerifyResult(container, 0, 'o');
        clickButtonAndVerifyResult(container, 7, 'x');
        clickButtonAndVerifyResult(container, 2, 'o');
        clickButtonAndVerifyResult(container, 1, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the right column', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 2, 'x');
        clickButtonAndVerifyResult(container, 0, 'o');
        clickButtonAndVerifyResult(container, 5, 'x');
        clickButtonAndVerifyResult(container, 1, 'o');
        clickButtonAndVerifyResult(container, 8, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });

      test('that a winner will be identified when 3 Xs go accross the top-left to bottom-right', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 0, 'x');
        clickButtonAndVerifyResult(container, 1, 'o');
        clickButtonAndVerifyResult(container, 4, 'x');
        clickButtonAndVerifyResult(container, 2, 'o');
        clickButtonAndVerifyResult(container, 8, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
      test('that a winner will be identified when 3 Xs go accross the top-right to bottom-left', () => {
        // Arrange
        const { container } = render(<App />);

        // Act
        clickButtonAndVerifyResult(container, 2, 'x');
        clickButtonAndVerifyResult(container, 0, 'o');
        clickButtonAndVerifyResult(container, 4, 'x');
        clickButtonAndVerifyResult(container, 3, 'o');
        clickButtonAndVerifyResult(container, 6, 'x');

        // Assert
        const winnerScreen = screen.queryByText('Winner is x')
        expect(winnerScreen).not.toBeNull();
        expect(winnerScreen).toBeInTheDocument();
      });
    });
  });


  describe('Prints "Winner is o" when o wins', () => {
    test('that a winner will be identified when 3 os get in a row across the top', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 3, 'x');
      clickButtonAndVerifyResult(container, 0, 'o');
      clickButtonAndVerifyResult(container, 4, 'x');
      clickButtonAndVerifyResult(container, 1, 'o');
      clickButtonAndVerifyResult(container, 6, 'x');
      clickButtonAndVerifyResult(container, 2, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });

    test('that a winner will be identified when 3 Os go accross the middle row', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 1, 'x');
      clickButtonAndVerifyResult(container, 3, 'o');
      clickButtonAndVerifyResult(container, 0, 'x');
      clickButtonAndVerifyResult(container, 4, 'o');
      clickButtonAndVerifyResult(container, 8, 'x');
      clickButtonAndVerifyResult(container, 5, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    test('that a winner will be identified when 3 Os go accross the bottom row', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 0, 'x');
      clickButtonAndVerifyResult(container, 6, 'o');
      clickButtonAndVerifyResult(container, 1, 'x');
      clickButtonAndVerifyResult(container, 8, 'o');
      clickButtonAndVerifyResult(container, 4, 'x');
      clickButtonAndVerifyResult(container, 7, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    
    test('that a winner will be identified when 3 Os go accross the left column', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 4, 'x');
      clickButtonAndVerifyResult(container, 3, 'o');
      clickButtonAndVerifyResult(container, 8, 'x');
      clickButtonAndVerifyResult(container, 0, 'o');
      clickButtonAndVerifyResult(container, 1, 'x');
      clickButtonAndVerifyResult(container, 6, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    test('that a winner will be identified when 3 Os go accross the center column', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 3, 'x');
      clickButtonAndVerifyResult(container, 4, 'o');
      clickButtonAndVerifyResult(container, 6, 'x');
      clickButtonAndVerifyResult(container, 1, 'o');
      clickButtonAndVerifyResult(container, 5, 'x');
      clickButtonAndVerifyResult(container, 7, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });
    test('that a winner will be identified when 3 Os go accross the right column', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 1, 'x');
      clickButtonAndVerifyResult(container, 2, 'o');
      clickButtonAndVerifyResult(container, 0, 'x');
      clickButtonAndVerifyResult(container, 5, 'o');
      clickButtonAndVerifyResult(container, 7, 'x');
      clickButtonAndVerifyResult(container, 8, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });    

    test('that a winner will be identified when 3 Os go accross the top-left to bottom-right', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 1, 'x');
      clickButtonAndVerifyResult(container, 0, 'o');
      clickButtonAndVerifyResult(container, 3, 'x');
      clickButtonAndVerifyResult(container, 4, 'o');
      clickButtonAndVerifyResult(container, 7, 'x');
      clickButtonAndVerifyResult(container, 8, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });  
    test('that a winner will be identified when 3 Os go accross the top-right to bottom-left', () => {
      // Arrange
      const { container } = render(<App />);

      // Act
      clickButtonAndVerifyResult(container, 0, 'x');
      clickButtonAndVerifyResult(container, 2, 'o');
      clickButtonAndVerifyResult(container, 3, 'x');
      clickButtonAndVerifyResult(container, 4, 'o');
      clickButtonAndVerifyResult(container, 7, 'x');
      clickButtonAndVerifyResult(container, 6, 'o');

      // Assert
      const winnerScreen = screen.queryByText('Winner is o')
      expect(winnerScreen).not.toBeNull();
      expect(winnerScreen).toBeInTheDocument();
    });       
  });

  describe('Wave 4:  reset game button', () => {
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
      clickButtonAndVerifyResult(container, 0, 'x');
      clickButtonAndVerifyResult(container, 2, 'o');

      // Find the reset button
      const resetButton = screen.queryByText(/[Rr]eset\s+[Gg]ame/);

      // Act - Click the reset button
      fireEvent.click(resetButton);

      // Assert - There should no longer be Xs or Os 
      // on the board.
      const xSquare = screen.queryByText('x');
      expect(xSquare).toBeNull();

      const oSquare = screen.queryByText('o');
      expect(oSquare).toBeNull();
    });
  });
});