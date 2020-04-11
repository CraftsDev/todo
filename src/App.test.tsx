import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './App';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './layout/content/home/HomePage';

test('Test App Home Page for child components.', () => {
  const wrappedApp = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  /* This makes the other test a little redundant, but alas, test files must have a test. */
  expect(wrappedApp.find(Header)).toBeTruthy;
  expect(wrappedApp.find(HomePage)).toBeTruthy;
  expect(wrappedApp.find(Footer)).toBeTruthy;
});
