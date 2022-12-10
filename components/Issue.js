import React from 'react';
import { Link } from 'react-router-dom';
import "./table.css";

export default class Issue extends React.Component {
  render() {
    const path = `/issues/${this.props.issuedescription}`;
    return (
      <tr>
        <td><Link to={path}>{this.props.issuedescription}</Link></td>
        <td>{this.props.severity}</td>
        <td>{this.props.status}</td>
      </tr>
    );
  }
}