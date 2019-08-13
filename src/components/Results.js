import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Pages.css';

const styles = theme => ({
  card: {
    marginBottom: 20,
    padding: 9,
    paddingTop: 0,
    paddingBottom: 20,
    flexWrap: "wrap"
  },
  title: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
  },
  button: {
    fontSize: 13,
    marginRight: theme.spacing(1) * 2,
    marginLeft: theme.spacing(1) * 2,
  }
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: null
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="Results">
        <h1>Results</h1>
        <Divider />
        <br />
        {this.props.links.length === 0 ? 
          <div><h2>No links detected! Please try again.</h2><br/></div> : ""}
        {this.props.links.map((link, i) => {
          return (
            <center key={i}>
              <Box width="75%">
                <Card className={classes.card} style={{'whiteSpace': 'unset', 'wordWrap': 'break-word'}}>
                  <Typography className={classes.title}>
                    <h3>{link.value}</h3>
                  </Typography>
                  <a href={link.href}>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Visit link
                    </Button>
                  </a>
                  <CopyToClipboard text={link.href}
                    onCopy={() => this.setState({ copied: i })}>
                    <Button variant="contained" color="primary" className={classes.button}>
                      {this.state.copied !== i ? "Copy link" : "Copied!"}
                    </Button>
                  </CopyToClipboard>
                </Card>
              </Box>
            </center>
          )
        })}
        <Button variant="contained" color="primary" className={classes.button} onClick={() => window.location.reload()}>
          Upload another
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Results);