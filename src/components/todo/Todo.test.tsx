import React from 'react';
import Todo from './Todo';
import { render } from '@testing-library/react';

test('Test Rendering of Todo List Component', () => {
  const { getByText } = render(<Todo />);
  const todoText = getByText(/Todo Item Renders Here/i);

  expect(todoText).toBeInTheDocument();
});
