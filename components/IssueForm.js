
import React from 'react';
import { withFormik, Form} from 'formik'
import * as Yup from 'yup'




export default class IssueForm extends React.Component {
    constructor(props) {
      super(props);
      this.refIssueDescription = React.createRef();
      this.refSeverity = React.createRef();
      this.refStatus = React.createRef();
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
      event.preventDefault();
      var issue = {};
      issue.issuedescription = this.refIssueDescription.current.value;
      issue.severity = this.refSeverity.current.value;
      issue.status = this.refStatus.current.value;
      this.props.onSave(issue);
    }

    render() {
        return (
            <form>
                <h1>Add Issue</h1>
                Description:&nbsp;
                <input type="text" placeholder="Enter Issue Description" ref={this.refIssueDescription} /> <span style={{ color: 'red' }}></span><br/><br/>
                Severity: &nbsp;
                <select ref={this.refSeverity} >
                <option value="Minor" >Minor</option>
                <option value="Critical" >Critical</option>
                <option value="Major" >Major</option>
                </select><br/><br/>
                Status: &nbsp;
                <input type="radio" value="Open" name="status" ref={this.refStatus}/>Open
                <input type="radio" value="In Progress" name="status" ref={this.refStatus}/>In Progress 
                <input type="radio" value="Closed" name="status" ref={this.refStatus}/>Closed
       <br/><br/>
                <input type="submit" value="Submit" onClick={this.onSubmit}/>
            </form>
          
        );
    }
}
