import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import history from './history';
import { Router } from 'react-router-dom';
import App from './App';

describe('Testing application routes', () => {
  const wrappedAppRouter = () =>
    render(
      <Router history={history}>
        <App />
      </Router>
    );

  test('Test Home Page', () => {
    const { getByTestId, getByText } = wrappedAppRouter();
    const logo = getByTestId('logo');
    fireEvent.click(logo); //navigate to home page
    expect(getByText('Welcome to the Crafts Development Todo Application'));
  });

  test('Test Edit List Page', () => {
    const { getAllByTestId, getByText } = wrappedAppRouter();
    const todoListPageLink = getAllByTestId('editlist-menu-item'); // we have two navs
    fireEvent.click(todoListPageLink[0]);
    expect(getByText(/Todo List: [0-9]* \(edit\)/i)).toBeTruthy();
    expect(getByText('Create New Todo')).toBeTruthy();
  });

  test('Test Read List Page', () => {
    const { getByTestId, getAllByTestId, getByText } = wrappedAppRouter();
    const todoListPageLink = getAllByTestId('editlist-menu-item'); // we have two navs
    fireEvent.click(todoListPageLink[0]);
    const readListLink = getByTestId('readlist-toggle');
    fireEvent.click(readListLink);
    expect(getByText(/Todo List: [0-9]* \(read\)/i)).toBeTruthy();
  });

  test('Test New Todo Page', () => {
    const { getAllByTestId, getByText } = wrappedAppRouter();
    const todoListPageLink = getAllByTestId('add-menu-item'); // we have two navs
    fireEvent.click(todoListPageLink[0]);
    expect(getByText('Add Todo')).toBeTruthy();
  });
});
