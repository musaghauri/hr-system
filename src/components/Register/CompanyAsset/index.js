import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { COMPANY_ASSETS_OPTIONS, RELATION_OPTIONS } from "@config";
import { DateInput } from "semantic-ui-calendar-react";

class CompanyAsset extends Component {
  handleChange = (name, value) => {
    console.log(name, value);
    this.props.updateFormDetails("companyAssets", name, value);
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
    let returnable = formDetails.getIn([
      "companyAssets",
      "returnable",
      "value"
    ]);
    let status = formDetails.getIn(["companyAssets", "status", "value"]);
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Company Asset Details</h1>
          <Form.Group widths="equal">
            <Form.Select
              label="ID"
              options={COMPANY_ASSETS_OPTIONS}
              type="text"
              name="id"
              value={formDetails.getIn(["companyAssets", "id", "value"])}
              placeholder="Select company asset"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Detail"
              type="text"
              name="detail"
              value={formDetails.getIn(["companyAssets", "detail", "value"])}
              placeholder="Detail"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Button
              toggle
              name="returnable"
              active={returnable}
              content="Returnable"
              onClick={(e, { name }) => this.handleChange(name, !returnable)}
            />
            <Button
              toggle
              name="status"
              active={status}
              content="Status"
              onClick={(e, { name }) => this.handleChange(name, !status)}
            />
            <DateInput
              fluid
              label="Issue Date"
              name="issueDate"
              value={formDetails.getIn(["companyAssets", "issueDate", "value"])}
              placeholder="Issue Date"
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

export default CompanyAsset;
