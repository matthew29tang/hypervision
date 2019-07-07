import React from 'react';
import './Pages.css';

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            console.warn("img data ",e.target.result);
        }
    }

    render() {
        return (
            <div className="head">
                <h2>Upload here!</h2>
                <input type = "file" name = "file" onChange={(e)=>this.onChange(e)} />
            </div>
        )
    }
      
}

export default Upload;