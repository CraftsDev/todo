import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './layout/content/list/ListPage';
import AddPage from './layout/content/add/AddPage';
import HomePage from './layout/content/home/HomePage';
import { Container } from '@material-ui/core';

const AppRouter = () => (
  // add some margin to clean it up
  <Container maxWidth="lg" style={{ marginTop: 25, marginBottom: 25 }}>
    <Switch>
      <Route path="/list">
        <ListPage />
      </Route>
      <Route path="/add">
        <AddPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Container>
);

export default AppRouter;
