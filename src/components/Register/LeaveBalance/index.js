import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class LeaveBalance extends Component {
  handleChange = (name, value) => {
    console.log(name, value);
    this.props.updateFormDetails("leaveBalance", name, value);
  };
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formDetails } = this.props;
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Leave Balance Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Leave Balance"
              type="text"
              name="leaveBalance"
              // value={formDetails.getIn(["leaveBalance", "value"])}
              placeholder="Leave Balance"
              error={{ content: "Please enter a value" }}
              // onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default LeaveBalance;
