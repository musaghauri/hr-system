import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { MODE_OF_PAYMENT_OPTIONS } from "@config/constants/payment";

class Salary extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(
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
    // console.log('salarySettings', formDetails.get('salarySettings').toJS())
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Salary Details</h1>
          <Form.Group widths="equal">
            <Form.Select
              type="text"
              options={MODE_OF_PAYMENT_OPTIONS}
              label={formDetails.getIn(['salarySettings', 'modeOfPayment', 'label'])}
              name={formDetails.getIn(['salarySettings', 'modeOfPayment', 'name'])}
              value={formDetails.getIn([
                "salarySettings",
                "modeOfPayment",
                "value",
              ])}
              placeholder={formDetails.getIn(['salarySettings', 'modeOfPayment', 'placeholder'])}
              error={
                !formDetails.getIn(['salarySettings', 'modeOfPayment', 'status'])
                  ? formDetails.getIn(['salarySettings', 'modeOfPayment', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              type="text"
              label={formDetails.getIn(['salarySettings', 'exGratiaOnOvertime', 'label'])}
              name={formDetails.getIn(['salarySettings', 'exGratiaOnOvertime', 'name'])}
              value={formDetails.getIn([
                "salarySettings",
                "exGratiaOnOvertime",
                "value",
              ])}
              placeholder={formDetails.getIn(['salarySettings', 'exGratiaOnOvertime', 'placeholder'])}
              error={
                !formDetails.getIn(['salarySettings', 'exGratiaOnOvertime', 'status'])
                  ? formDetails.getIn(['salarySettings', 'exGratiaOnOvertime', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              type="text"
              label={formDetails.getIn(['salarySettings', 'gratuity', 'label'])}
              name={formDetails.getIn(['salarySettings', 'gratuity', 'name'])}
              value={formDetails.getIn([
                "salarySettings",
                "gratuity",
                "value",
              ])}
              placeholder={formDetails.getIn(['salarySettings', 'gratuity', 'placeholder'])}
              error={
                !formDetails.getIn(['salarySettings', 'gratuity', 'status'])
                  ? formDetails.getIn(['salarySettings', 'gratuity', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              type="text"
              label={formDetails.getIn(['salarySettings', 'bankDetails', 'label'])}
              name={formDetails.getIn(['salarySettings', 'bankDetails', 'name'])}
              value={formDetails.getIn([
                "salarySettings",
                "bankDetails",
                "value",
              ])}
              placeholder={formDetails.getIn(['salarySettings', 'bankDetails', 'placeholder'])}
              error={
                !formDetails.getIn(['salarySettings', 'bankDetails', 'status'])
                  ? formDetails.getIn(['salarySettings', 'bankDetails', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
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
