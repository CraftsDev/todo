import React from 'react';
import { Typography, makeStyles, createStyles, Theme, Paper, Link, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { reusablePaperStyle, reusableIconStyle } from '../../styles/shared';

const useHomePageStyle = makeStyles((theme: Theme) =>
  createStyles({ homepagePaper: { ...reusablePaperStyle(theme) }, icon: { ...reusableIconStyle(theme) } })
);

const HomePage = () => {
  const classes = useHomePageStyle();
  return (
    <div>
      <Typography variant="h3" color="primary" align="center">
        Welcome to the Crafts Development Todo Application
      </Typography>
      <Paper className={classes.homepagePaper}>
        <Typography paragraph>
          {`This application gives you the ability to create, read, edit, & delete todo items, while harnessing the power
          of React, TypeScript, and Material-UI.`}
        </Typography>
        <Typography paragraph>
          {`To navigate the application you can utilize the navigation links to the left on desktop, and in the drawer
          that is toggled by the hamburger navigation on Mobile. Two pages are provided, the "Todo List" and "New Todo" pages.`}
        </Typography>
        <Typography paragraph>
          {`The "Todo List" page gives you the ability to both view/edit a list of todo items. You have the ability to
          delete a todo from the list, as well as navigate to an edit form for the selected todo. At the bottom of the
          todo list page you will find a "Create New Todo" button to provide a better UI/UX for adding additional todos.
          If a todo has expired it will display a chip that reads "expired", but will not delete it.`}
        </Typography>
        <Typography paragraph>
          {`The "New Todo" page provides a form for adding/editing todos on the list of todos. The "Name" field is the
          only required field to create a new todo item, all other fields are optional. The name must be at least 3
          characters long and no longer than 255 characters. To provide a better UI/UX an additional delete and reset
          button are provided on the todo form.`}
        </Typography>
        <Typography paragraph>{`Enjoy and get productive!`}</Typography>
        <Typography variant="h5" align="center">
          <Link href="https://github.com/CraftsDev/todo" target="_blank" underline="none">
            <Button variant="contained" color="primary">
              <GitHubIcon className={classes.icon} />
              {`View the Github Project`}
            </Button>
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default HomePage;
