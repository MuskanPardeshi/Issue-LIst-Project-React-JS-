import React from 'react';
import "./table.css";
import Issue from './Issue';

export default class IssueList extends React.Component {
  render() {
    const issueNodes = this.props.issues.map(issue => {
      return (
        <Issue key={issue.id}  id={issue.id}  issuedescription={issue.issuedescription} severity={issue.severity} 
         status={issue.status} > 
        </Issue>
      )
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
             
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
          {issueNodes}
        </table>
      </div>
    );
  }
}

