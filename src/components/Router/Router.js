import React from "react";
import { 
  HashRouter as Router, 
  Route, 
  Switch, 
  NavLink
} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="75%" maxWidth={1000}>
          <Paper className={classes.root}>
            {routing}
          </Paper>
        </Box>
      </Grid>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/rendering`}>Rendering with React</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default withStyles(styles)(Routing);
/*import React from "react";
import './Router.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Approuter() {
  return (
    <Router>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="spacer" />
            <div>
            <ul className="toolbar_navigation-items">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/topics">Topics</NavLink>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </nav>
      </header>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/rendering`}>Rendering with React</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Approuter;*/