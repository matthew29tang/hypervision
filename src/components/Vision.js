import React from 'react';
import Upload from "./Upload.js";
import Results from "./Results.js";

class Vision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "upload",
      links: []
    };
  }

  nextPage = () => {
    this.setState({ page: "results" });
  }

  storeResults = (links) => {
    this.setState({links});
  }

  render() {
    return (
      <div className="vision">
        {this.state.page === "upload" ?
          <Upload nextPage={this.nextPage} storeResults={this.storeResults}/> :
          <Results links={this.state.links}/>}
      </div>
    );
  }
}

export default Vision;