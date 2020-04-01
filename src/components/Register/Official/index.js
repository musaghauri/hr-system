import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { EMPLOYEE_STATUS_OPTIONS, DEPARTMENT_OPTIONS } from "@config";

class Official extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(
      ["formDetails", "officialInformation", name, "value"],
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
          <h1 className="ui centered">Enter Official Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              label="Employee ID"
              type="text"
              name="employeeId"
              value={formDetails.getIn([
                "officialInformation",
                "employeeId",
                "value"
              ])}
              placeholder="Employee ID"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Employee Status"
              options={EMPLOYEE_STATUS_OPTIONS}
              type="text"
              name="employeeStatus"
              value={formDetails.getIn([
                "officialInformation",
                "employeeStatus",
                "value"
              ])}
              placeholder="Select status"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Designation"
              type="text"
              name="designation"
              value={formDetails.getIn([
                "officialInformation",
                "designation",
                "value"
              ])}
              placeholder="Designation"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Social Security"
              type="text"
              name="socialSecurity"
              value={formDetails.getIn([
                "officialInformation",
                "socialSecurity",
                "value"
              ])}
              placeholder="Social Securit Number"
              error={{ content: "Please enter a name" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Health Benefits"
              type="text"
              name="healthBenefits"
              value={formDetails.getIn([
                "officialInformation",
                "healthBenefits",
                "value"
              ])}
              placeholder="NTN"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Provident Fund"
              type="text"
              name="providentFund"
              value={formDetails.getIn([
                "officialInformation",
                "providentFund",
                "value"
              ])}
              placeholder="NTN"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              label="Department"
              options={DEPARTMENT_OPTIONS}
              type="text"
              name="department"
              value={formDetails.getIn([
                "officialInformation",
                "department",
                "value"
              ])}
              placeholder="Select department"
              error={{ content: "Please select a city" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <DateInput
              fluid
              label="Joining Date"
              name="joiningDate"
              placeholder="Joining Date"
              iconPosition="left"
              value={formDetails.getIn([
                "officialInformation",
                "joiningDate",
                "value"
              ])}
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Resignation Date"
              name="resignationDate"
              placeholder="Resignation Date"
              iconPosition="left"
              value={formDetails.getIn([
                "officialInformation",
                "resignationDate",
                "value"
              ])}
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <DateInput
              fluid
              label="Exit Date"
              name="exitDate"
              placeholder="Resignation Date"
              iconPosition="left"
              value={formDetails.getIn([
                "officialInformation",
                "exitDate",
                "value"
              ])}
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

export default Official;
