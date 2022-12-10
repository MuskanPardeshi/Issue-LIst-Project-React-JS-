import React from 'react';
import { withRouter } from 'react-router-dom';
import IssueForm from './IssueForm';
import { IssueConsumer } from './IssueContext';
import IssueApi from '../data/IssueApi';

class AddIssuePage extends React.Component {
    constructor(props) {
      super(props);
    }

    saveIssue(contextVal, issue) {
// F2:
        IssueApi.saveIssue(issue)
            .then((newIssue) => {
                contextVal.addIssue(newIssue);
                this.props.history.push('/');
            });
    }

    render() {
        return (
            <IssueConsumer>
                {(contextVal) => (
                    <IssueForm onSave={(issue) => this.saveIssue(contextVal, issue)} />
                )}
            </IssueConsumer>
        );
    }
}

export default withRouter(AddIssuePage);