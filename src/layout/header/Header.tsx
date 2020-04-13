import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
  useTheme,
  Typography,
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOptions from '../../resources/menuItems';
import headerStyles from './headerStyles';
import logo from './todo-logo.png';

const Header = () => {
  const classes = headerStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Since this context isn't needed stick it in an arrow function. */
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div id="header">
      <MenuList className={classes.menuList}>
        {/* Type can be inferred here, just adding for readability */}
        {MenuOptions.map((menuOption: MenuOption) => {
          const { desc, path, uuid, icon } = menuOption;
          return (
            <MenuItem
              component={Link}
              to={path}
              button
              key={uuid}
              className={classes.menuItem}
              onClick={() => setMobileOpen(false)}>
              <Typography>{desc}</Typography>
              <Icon className={classes.menuItemIcon} color="primary">
                {icon}
              </Icon>
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
