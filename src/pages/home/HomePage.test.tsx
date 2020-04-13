import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../../App';
import HomePage from './HomePage';

test('Test Home Page Component Renders From "/".', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(wrappedApp.find(HomePage)).toBeTruthy;
});
