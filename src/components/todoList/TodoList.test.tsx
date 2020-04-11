import React from 'react';
import { render } from 'enzyme';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('Test Rendering of Todo List Component', () => {
    const todoComp = render(<TodoList />);

    expect(todoComp.find('#todo-list')).toBeTruthy();
  });
});
