import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Pages.css';

const styles = theme => ({
  logo: {
    marginTop: "150px",
    marginBottom: "150px",
  },
});

class Logo extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.logo}>
        <img src={require("./ocr-icon.png")} alt="logo"/>
      </div>
    );
  }
}

export default withStyles(styles)(Logo);