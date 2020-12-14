import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListIcon from '@material-ui/icons/List';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Toolbar, Container, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  link: {
    display: 'flex',
  },
  nav: {
    background: '#f44336',
    color: 'white',
  },
}));

export default function Nav(props) {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();
  const navStyle = {
      textDecoration: 'none',
  };
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#b71c1c',
      },
      secondary: {
        main: '#c62828',
      },
    },
  });
  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#6573c3',
      },
    },
  })
  
  return (
      <div className={classes.root}>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper style={{ height: '100vh' }} elevation={0} square>
              <AppBar position="static">
                <Toolbar>
                  <Typography className={classes.title}>
                    <Link style={navStyle} to="/">
                      <BottomNavigationAction label="Home" icon={<HomeIcon />} showLabel={true} style={{ color:'rgba(255, 255, 255, 0.9)'}}/>
                    </Link>
                    <Link style={navStyle} to="/about">
                      <BottomNavigationAction label="About" icon={<InfoIcon />} showLabel={true} style={{ color:'rgba(255, 255, 255, 0.9)'}}/>
                    </Link>
                    <Link style={navStyle} to="/list">
                      <BottomNavigationAction label="List" icon={<ListIcon />} showLabel={true} style={{ color:'rgba(255, 255, 255, 0.9)'}}/>
                    </Link>
                  </Typography>
                  <BottomNavigationAction onClick={() => setDarkMode(!darkMode)} icon={<Brightness4Icon />} style={{ color:'rgba(255, 255, 255, 0.9)', navStyle}}/>
                </Toolbar>
              </AppBar>
              <Container>
                <Box my={4}>
                  { props.children }
                </Box>
              </Container> 
            </Paper>
          </ThemeProvider>
      </div>
  );
}