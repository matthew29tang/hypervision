import React from 'react';
import './Pages.css';

class Upload extends React.Component {

    render() {
        return (
            <div className="head">
                <h2>Upload here!</h2>
            </div>
        )
    }
      
}

export default Upload;

/*function Topics({ match }) {
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
}*/
