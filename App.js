import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import AllIssuesPage from './components/AllIssuesPage';
import AddIssuePage from './components/AddIssuePage';
import IssueDetailPage from './components/IssueDetailPage';
import { IssueProvider } from './components/IssueContext';


class Links extends React.Component {
  render() {
    return (
        
      <nav>
        <NavLink to="/">About</NavLink>
        <NavLink style={{padding: 20}} to="/issues">Issues</NavLink>
      </nav>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <IssueProvider>
        <Router>
          <div>
          <Links/>
            <Switch>
              <Route exact path="/issues" component={AllIssuesPage} />
              <Route path="/addIssue" component={AddIssuePage} />
              <Route path="/" render={() => <h1>About: This application is used to track the status of the issue raised</h1> } />
              <Route  path="/issues/:id" component={IssueDetailPage} />
            </Switch>
          </div>
        </Router>
      </IssueProvider>
    );
  }
}

