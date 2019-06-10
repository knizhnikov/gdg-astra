import React from 'react';
import PropTypes from 'prop-types';

import { AppBar, Button, Toolbar, IconButton, Typography, BottomNavigation, BottomNavigationAction, CssBaseline, Slide, Hidden } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { Menu, Sms, Group, Star, Home } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

import './App.css';

import Landing from './components/landing/Landing';

const useStyles = makeStyles(theme => ({
  rootBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <HideOnScroll className={classes.root} {...props}>
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography className={classes.title} variant="h6">
              GDG Astrakhan
            </Typography>
            <Hidden smDown>
              <Button color="inherit">О нас</Button>
              <Button color="inherit">Мероприятия</Button>
              <Button color="inherit">Команда</Button>
              <Button color="inherit">Контакты</Button>
              <Button color="primary" variant="outlined">Присоединиться</Button>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Landing />
      <br /><br /><br /><br />

      <Hidden mdUp>
        <BottomNavigation
          showLabels
          className={classes.rootBottom}
        >
          <BottomNavigationAction label="О нас" icon={<Home />} />
          <BottomNavigationAction label="Мероприятия" icon={<Star />} />
          <BottomNavigationAction label="Команда" icon={<Group />} />
          <BottomNavigationAction label="Контакты" icon={<Sms />} />
        </BottomNavigation>
      </Hidden>
    </div>
  );
}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;