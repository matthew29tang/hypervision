import React from 'react';
import {
    HashRouter as Router,
    NavLink
} from "react-router-dom";
/*import PropTypes from 'prop-types';
import classNames from 'classnames';*/

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Routing from './Router.js';
import styles from './navBarStyles.js'

class NavBar extends React.Component {
    render() {
        /*const { classes } = this.props;*/

        return (
            <div>
              <CssBaseline />
                <Toolbar>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                  >
                    <Router>
                      <NavLink activeClassName="active" to={"/"} type="menu">
                        HyperLink Service
                    </NavLink>
                    </Router>
                  </Typography>
                  <Router>
                    <NavLink to="/about">
                      <Button color="inherit">About</Button>
                    </NavLink>
                  </Router>
                  <Router>
                    <NavLink to="/topics">
                      <Button color="inherit">Topics</Button>
                    </NavLink>
                  </Router>
                </Toolbar>
              <main /*className={classes.content}*/>
                <div /*className={classes.appBarSpacer}*/ />
                <Routing />
              </main>
            </div>
        );      
    }
}

export default withStyles(styles)(NavBar);
