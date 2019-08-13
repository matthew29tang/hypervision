import React from 'react';
import imageCompression from 'browser-image-compression';
import Divider from '@material-ui/core/Divider';
import Dropzone from './Dropzone/Dropzone.js';
import Progress from './Progress/Progress.js';
import progress from './Progress/progress.svg';
import './Pages.css';

const BACKEND_URL = "https://ocr-hyperlink-vision.herokuapp.com/upload"

class Upload extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };
    // Ping the backend so we can get it spinning
    fetch(BACKEND_URL);
  }

  onFilesAdded = (file) => {
    this.setState(prevState => ({
      files: prevState.files.concat(file)
    }), this.uploadFiles(file[0]));
  }

  renderProgress = (file) => {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div id="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            id="CheckIcon"
            alt="done"
            src={progress}
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  uploadFiles = (file) => {
    this.setState({ uploadProgress: {}, uploading: true });
    try {
      var options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
      }
      imageCompression(file, options)
        .then(compressed => {
          this.sendRequest(compressed)
        })
      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      this.setState({ successfullUploaded: false, uploading: false });
    }
  }

  sendRequest = (file) => {
    const req = new XMLHttpRequest();

    req.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = {
          state: "pending",
          percentage: (event.loaded / event.total) * 100
        };
        this.setState({ uploadProgress: copy });
      }
    });

    req.upload.addEventListener("load", event => {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = { state: "done", percentage: 100 };
      this.setState({ uploadProgress: copy });
    });

    req.upload.addEventListener("error", event => {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = { state: "error", percentage: 0 };
      this.setState({ uploadProgress: copy });
    });

    const formData = new FormData();
    formData.append("image", file, "image");
    req.open("POST", BACKEND_URL);
    req.send(formData);
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        console.log(JSON.parse(req.response));
        this.props.storeResults(JSON.parse(req.response));
        this.props.nextPage();
      }
    }
  }

  render() {
    return (
      <div id="Uploading">
        <h1>Upload</h1>
        <Divider />
        <h2>Select a picture to upload!</h2>
        <br/>
        <center>
          <Dropzone
            onFilesAdded={this.onFilesAdded}
            disabled={this.state.uploading || this.state.successfullUploaded}
          />
        </center>
        <br />
        <br />
        {this.state.files.length > 0 ?
          <div id="Files">
            Uploading image... 
            <br/>
            (this can take up to 5 secs for large images)
            {/*
            <div key={this.state.files.name} id="Row">
              {this.renderProgress(this.state.files)}
            </div>
            */}
          </div> : ""}
      </div>

    );
  }
}

export default Upload;