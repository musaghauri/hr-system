import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { GENDER_OPTIONS, RELATION_OPTIONS } from "@config";
import { DateInput } from "semantic-ui-calendar-react";

class Dependent extends Component {
  handleChange = (name, value) => {
    console.log(name, value);
    this.props.updateFormDetails("dependants", name, value);
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
          <h1 className="ui centered">Enter Dependents Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              type="text"
              name="name"
              value={formDetails.getIn(["dependants", "name", "value"])}
              placeholder="Name"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Gender"
              options={GENDER_OPTIONS}
              type="text"
              name="gender"
              value={formDetails.getIn(["dependants", "gender", "value"])}
              placeholder="Select gender"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              label="Relation"
              options={RELATION_OPTIONS}
              type="text"
              name="relation"
              value={formDetails.getIn(["dependants", "relation", "value"])}
              placeholder="Select gender"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Contact"
              type="text"
              name="contact"
              value={formDetails.getIn(["dependants", "contact", "value"])}
              placeholder="Contact"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Date of Birth"
              name="dateOfBirth"
              value={formDetails.getIn(["dependants", "dateOfBirth", "value"])}
              placeholder="Date of Birth"
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

export default Dependent;
