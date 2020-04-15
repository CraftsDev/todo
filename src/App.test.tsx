import React from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';
import history from './history';

describe('Test Entry App', () => {
  const wrappedApp = render(
    <Router history={history}>
      <App />
    </Router>
  );

  test('Test iniatially render on home page.', () => {
    /* initially home page should render */
    const hometitle = wrappedApp.getByText('Welcome to the Crafts Development Todo Application');
    expect(hometitle).toBeTruthy();
  });
});
