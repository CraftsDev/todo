import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../../../App';
import ErrorPage from './ErrorPage';

test('', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/error']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(ErrorPage)).toBeTruthy;
});
