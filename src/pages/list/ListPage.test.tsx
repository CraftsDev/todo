import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import ListPage from './ListPage';
import App from '../../App';

test('Test List Page Component Renders From "/list".', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/list']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(ListPage)).toBeTruthy;
});
