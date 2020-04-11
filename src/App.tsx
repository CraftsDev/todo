import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import AppRouter from './AppRouter';
import theme from './theme';

/* Import Layout Components */
import Header from './layout/header/Header';
import headerStyles from './layout/header/headerStyles';
import Footer from './layout/footer/Footer';

const App = () => {
  const classes = headerStyles();
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <div className={classes.content}>
            <div className={classes.toolbar} />
            <AppRouter />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
