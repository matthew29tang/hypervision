import React from 'react';
import Divider from '@material-ui/core/Divider';
import './Pages.css';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <Divider />
        <br/>
        This web application was created by Matthew Tang and Christianna Xu.
        <br/><br/>
        To use this service, upload a picture and the URLs visible in the image will be displayed so you can easily copy without typing them.
      </div>
    );
  }
}

export default About;