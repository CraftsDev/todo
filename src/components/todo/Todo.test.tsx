import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../../App';
import Todo from './Todo';

test('Test Rendering of Todo List Component on List Page', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/add']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(Todo)).toBeTruthy;
});
