import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { TYPE_OPTIONS } from "@config";

class Contact extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(
      ["formDetails", "contactInformation", name, "value"],
      value
    );
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
          <h1 className="ui centered">Enter Contact Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              type="text"
              name="title"
              value={formDetails.getIn([
                "contactInformation",
                "title",
                "value"
              ])}
              placeholder="Title"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Type"
              options={TYPE_OPTIONS}
              type="text"
              name="type"
              value={formDetails.getIn(["contactInformation", "type", "value"])}
              placeholder="Select a type"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Detail"
              type="text"
              name="detail"
              value={formDetails.getIn([
                "contactInformation",
                "detail",
                "value"
              ])}
              placeholder="Detail"
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

export default Contact;
