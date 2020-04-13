import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../../../App';
import AddPage from './TodoFormPage';
import TodoForm from '../../../forms/todo/TodoForm';

test('Test Add Page Component Renders From "/add".', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/add']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(AddPage)).toBeTruthy;
  expect(wrappedApp.find(TodoForm)).toBeTruthy;
});
