import React from 'react';
import { Link } from 'react-router-dom';
import IssueList from './IssueList';
import IssueApi from '../data/IssueApi';

export default class AllIssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          issues: []
            };
      }
   
      componentDidMount() {
        IssueApi.getAllIssues(data => this.setState({ issues: data}));
      }
    render() {
        return (
            <>
                <h1>Issue list</h1>
                <IssueList issues={this.state.issues} />
                <br/>
                <Link to="/addIssue">Add Issue</Link>
            </>
        );
    }
}