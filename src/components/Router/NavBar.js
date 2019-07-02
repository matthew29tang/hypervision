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
import styles from './navBarStyles.js';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        /*const { classes } = this.props;*/
        const s = { 
            color: 'white',
            textDecoration: 'none'
        };

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
                  >
                    <Router>
                      <NavLink activeClassName="active" to={"/"} type="menu" className="Title">
                        Hyperlink Service
                        </NavLink>
                    </Router>
                  </Typography>
                  <Router>
                    <NavLink to="/about" className="links">
                      <Button color="inherit">About</Button>
                    </NavLink>
                  </Router>
                  <Router>
                    <NavLink to="/upload" className="links">
                      <Button color="inherit">Upload</Button>
                    </NavLink>
                  </Router>
                </Toolbar>
              </AppBar>
              <main /*className={classes.content}*/>
                <div /*className={classes.appBarSpacer}*/ />
                <Routing />
              </main>
            </div>
        );      
    }
}

export default withStyles(styles)(NavBar);
