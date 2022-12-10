import React from 'react';
import {withRouter, Prompt} from 'react-router-dom';
import { Link } from 'react-router-dom';

let authenticated = true;
class IssueDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modified: false
    };
    this.authenticate(props);
  }

  authenticate(params) {
    const history = params.history;
    if (!authenticated) {
      alert("Not authenticated, hence redirecting back...");
      history.replace('/');
    }
    else {
      alert("Authenticated, hence proceeding ahead and displaying the details.")
    }
  }

  setModified() {
    this.setState({modified: true})
  }

  render() {
    return (
      <div>
       <h1>params:{this.props.match.params.id}</h1>
        <Prompt when={this.state.modified} message="Are you sure you want to leave ?" />
        <p><Link to="/">Back to Home</Link></p>
      </div>
    );
  }
}

export default withRouter(IssueDetail);