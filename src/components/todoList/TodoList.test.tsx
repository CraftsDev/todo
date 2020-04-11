import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import TodoList from './TodoList';
import App from '../../App';

test('Test Rendering of Todo List Component on List Page', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/list']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(TodoList)).toBeTruthy;
});
