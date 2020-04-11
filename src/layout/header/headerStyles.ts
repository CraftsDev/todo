import { makeStyles, Theme, createStyles } from '@material-ui/core';

export const drawerWidth = 240;
const headerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    menuList: {
      paddingTop: 30,
    },
    menuItem: {
      paddingLeft: 25,
      paddingTop: 10,
      paddingBottom: 10,
      display: 'flex',
      justifyContent: 'space-between',
    },
    menuItemIcon: {
      float: 'right',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    closeMenuButton: {
      marginTop: 10,
      marginRight: 10,
      marginLeft: 'auto',
    },
    logo: {
      padding: '10px 0',
      maxWidth: '120px',
    },
  })
);

export default headerStyles;
