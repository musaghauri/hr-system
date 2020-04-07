import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { MODE_OF_PAYMENT_OPTIONS } from "@config/constants/payment";

class Salary extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(
      ["formDetails", "salarySettings", name, "value"],
      value
    );
  };
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formDetails } = this.props;
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Salary Details</h1>
          <Form.Group widths="equal">
            <Form.Select
              label="Mode of Payment"
              options={MODE_OF_PAYMENT_OPTIONS}
              type="text"
              name="modeOfPayment"
              value={formDetails.getIn([
                "salarySettings",
                "modeOfPayment",
                "value",
              ])}
              placeholder="Select a type"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Ex-Gratia on Overtime"
              type="text"
              name="exGratiaOnOvertime"
              value={formDetails.getIn([
                "salarySettings",
                "exGratiaOnOvertime",
                "value",
              ])}
              placeholder="Ex-Gratia"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Gratuity"
              type="text"
              name="gratuity"
              value={formDetails.getIn(["salarySettings", "gratuity", "value"])}
              placeholder="Gratuity"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Bank Details"
              type="text"
              name="bankDetails"
              value={formDetails.getIn([
                "salarySettings",
                "bankDetails",
                "value",
              ])}
              placeholder="Bank Details"
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

export default Salary;
