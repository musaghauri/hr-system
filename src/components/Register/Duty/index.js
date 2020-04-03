import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { FREQUENCY_OPTIONS } from "@config/constants/frequency";
import { DateInput } from "semantic-ui-calendar-react";

class Duty extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(["formDetails", "duties", name, "value"], value);
  };
  saveAndContinue = e => {
    e.preventDefault();
    // this.props.nextStep();
    this.props.handleSubmit();
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
          <h1 className="ui centered">Enter Duties Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Job"
              type="text"
              name="job"
              value={formDetails.getIn(["duties", "job", "value"])}
              placeholder="Job"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Frequency"
              options={FREQUENCY_OPTIONS}
              type="text"
              name="frequency"
              value={formDetails.getIn(["duties", "frequency", "value"])}
              placeholder="Frequency"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Effective From"
              name="effectiveFrom"
              value={formDetails.getIn(["duties", "effectiveFrom", "value"])}
              placeholder="Effective From"
              iconPosition="left"
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <DateInput
              fluid
              label="Enhanced Till"
              name="enhancedTill"
              value={formDetails.getIn(["duties", "enhancedTill", "value"])}
              placeholder="Enhanced Till"
              iconPosition="left"
              error={{ content: "Please select a date" }}
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

export default Duty;
