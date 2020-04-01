import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class Experience extends Component {
  handleChange = (name, value) => {
    console.log(name, value);
    this.props.updateFormDetails("experience", name, value);
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
          <h1 className="ui centered">Enter Experience Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Organization"
              type="text"
              name="organization"
              value={formDetails.getIn(["experience", "organization", "value"])}
              placeholder="Organization"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Designation"
              type="text"
              name="designation"
              value={formDetails.getIn(["experience", "designation", "value"])}
              placeholder="Designation"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Duration"
              type="text"
              name="duration"
              value={formDetails.getIn(["experience", "duration", "value"])}
              placeholder="Duration"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Leaving Reason"
              type="text"
              name="leavingReason"
              value={formDetails.getIn([
                "experience",
                "leavingReason",
                "value"
              ])}
              placeholder="Leaving Reason"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Salary (Optional)"
              type="text"
              name="salary"
              value={formDetails.getIn(["experience", "salary", "value"])}
              placeholder="Salary"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default Experience;
