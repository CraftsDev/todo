import React, { useState, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, makeStyles, createStyles, Theme } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AppRouter from './AppRouter';
import theme from './theme';

/* Import Layout Components */
import Header from './layout/header/Header';
import { drawerWidth } from './layout/header/headerStyles';
import Footer from './layout/footer/Footer';

const appStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginLeft: drawerWidth,
      },
    },
    toolbar: theme.mixins.toolbar,
  })
);

const TodoListContext = createContext(new Array<Todo>());

const App = () => {
  const classes = appStyles();

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div className="App">
            <Header />
            <div className={classes.content}>
              <div className={classes.toolbar} />
              <AppRouter />
              <Footer />
            </div>
          </div>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
