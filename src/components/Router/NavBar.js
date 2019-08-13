import React from 'react';
import {
  HashRouter as Router,
  NavLink
} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Routing from './Router.js';
import './NavBar.css';

const styles = theme => ({
  title: {
    flexGrow: 1,
    paddingRight: '0px',
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              <Router>
                <NavLink activeClassName="active" to={"/"} type="menu" id="Title">
                  OCR Hyperlink Vision
                </NavLink>
              </Router>
            </Typography>
            <Router>
              <NavLink to="/about" className="links" id="about">
                <Button color="inherit">About</Button>
              </NavLink>
            </Router>
          </Toolbar>
        </AppBar>
        <main>
          <div />
          <Routing />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
