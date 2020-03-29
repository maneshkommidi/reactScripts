import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders React is awesome! text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/React is awesome!/i);
  expect(linkElement).toBeInTheDocument();
});
