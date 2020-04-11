import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme, AppBar, Toolbar, IconButton, Hidden, Drawer, MenuItem, MenuList } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { v4 as uuid } from 'uuid';
import headerStyles from './headerStyles';
import logo from './todo-logo.png';

/* For sake of type hinting and readability let creates some interfaces/types */
interface MenuOption {
  uuid: string;
  desc: string;
  path: string;
  icon: string;
}
type MenuOptions = MenuOption[];

/* This value could come from an endpoint/service */
const menuOptions: MenuOptions = [
  { uuid: uuid(), desc: 'Read Todo Items', path: '/list', icon: 'list' },
  { uuid: uuid(), desc: 'Create Todo Item', path: '/add', icon: 'add' },
];

/* Add Header Specific Props Here */
type HeaderProps = MakeStyleClasses;

const Header = () => {
  const classes = headerStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Since this context isn't needed stick it in an arrow function. */
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
      <MenuList className={classes.menuList}>
        {/* Type can be inferred here, just adding for readability */}
        {menuOptions.map((menuOption: MenuOption) => {
          const { desc, path, uuid, icon } = menuOption;
          return (
            <MenuItem component={Link} to={path} button key={uuid} className={classes.menuItem}>
              {desc}
              <Icon className={classes.menuItemIcon}>{icon}</Icon>
            </MenuItem>
          );
        })}
      </MenuList>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img src={logo} className={`${classes.logo}`} alt="todo - By Crafts Development" />
          </Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden xsUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}>
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Header;
