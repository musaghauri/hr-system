import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class LeaveBalance extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(["formDetails", name, "value"], value);
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
              type="text"
              label={formDetails.getIn(['leaveBalance', 'label'])}
              name={formDetails.getIn(['leaveBalance', 'name'])}
              value={formDetails.getIn([
                "leaveBalance",
                "value",
              ])}
              placeholder={formDetails.getIn(['leaveBalance', 'placeholder'])}
              error={
                !formDetails.getIn(['leaveBalance', 'status'])
                  ? formDetails.getIn(['leaveBalance', 'errorText'])
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

export default LeaveBalance;
