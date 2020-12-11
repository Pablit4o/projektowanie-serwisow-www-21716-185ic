import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';

const useStyles = makeStyles((theme) => ({
  menuColor:{
    background: '#f44336',
    color: 'white',
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

export default function ButtonAppBar() {
    const classes = useStyles();
    const navStyle = {
        color: 'white'
    }
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.menuColor}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                NavBar
            </Typography>
            <Link style={navStyle} to="/about">
                <Typography>
                    About
                </Typography>
            </Link>
            <Link style={navStyle} to="/">
                <Typography>
                    Home
                </Typography>
            </Link>
            </Toolbar>
        </AppBar>
        </div>
    );
}