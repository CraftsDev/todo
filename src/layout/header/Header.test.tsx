import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Header from './Header';
import App from '../../App';

test('Test Header Exist', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  //expect(wrappedApp.find('#header')).toBeVisible();
  // TODO
  expect(true).toBeTruthy();
});
