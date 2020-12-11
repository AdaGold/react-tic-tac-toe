import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Square from './Square';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'


describe('Wave 1: Square', () => {
  test('it renders with X given', () => {
    render(<Square value="X" id={1} onClickCallback={() => { }} />)
    
    const button = screen.getByText("X");

    expect(button).toBeInTheDocument();
  });

  test('it renders with O given', () => {
    render(<Square value="O" id={1} onClickCallback={() => { }} />)
    
    const button = screen.getByText("O");

    expect(button).toBeInTheDocument();
  });

  test('when clicked on it calls the callback function', async () => {
    const callback = jest.fn();

    render(<Square value="X" id={1} onClickCallback={callback} />);
    // Wait for it to render
    await waitFor(() => screen.getByText('X'))

    const button = screen.getByText('X');

    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
