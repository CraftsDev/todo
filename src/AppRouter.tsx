import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, makeStyles, createStyles, Theme } from '@material-ui/core';
import HomePage from './pages/home/HomePage';
import ListPage from './pages/list/ListPage';
import TodoFormPage from './pages/todoForm/TodoFormPage';
import ErrorPage from './pages/error/ErrorPage';

const appRouterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 50,
      marginBottom: 25,
    },
  })
);

const AppRouter = () => {
  const classes = appRouterStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:readEdit(read|edit)-list">
          <ListPage />
        </Route>
        <Route path="/add">
          <TodoFormPage />
        </Route>
        <Route path="/edit/:id">
          <TodoFormPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default AppRouter;
