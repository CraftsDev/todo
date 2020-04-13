import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import ErrorPage from './ErrorPage';
import App from '../../App';

test('', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/error']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(ErrorPage)).toBeTruthy;
});
