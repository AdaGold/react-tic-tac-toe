import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/React Tic Tac Toe/i);
  expect(titleElement).toBeInTheDocument();
});
