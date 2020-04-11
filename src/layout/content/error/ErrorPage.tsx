import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core';

const errorStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.error.main,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '6rem 0 6rem 0',
    },
    icon: {
      fontSize: 100,
    },
  })
);

const ErrorPage = () => {
  const classes = errorStyles();
  return (
    <div className={classes.root}>
      <WarningIcon className={classes.icon} />
      <Typography variant="h1">404</Typography>
      <Typography>Something Went Terribly Wrong!</Typography>
    </div>
  );
};

export default ErrorPage;
