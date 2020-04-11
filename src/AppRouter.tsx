import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListPage from './layout/content/list/ListPage';
import AddPage from './layout/content/add/AddPage';
import HomePage from './layout/content/home/HomePage';
import { Container, makeStyles, createStyles, Theme } from '@material-ui/core';
import ErrorPage from './layout/content/error/ErrorPage';

const appRouterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 25,
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
        <Route path="/list">
          <ListPage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default AppRouter;