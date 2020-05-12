import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';

class LeaveBalance extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(['formDetails', name, 'value'], value);
  };

  render() {
    const { formDetails, prevStep, nextStep } = this.props;
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Leave Balance Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="text"
            label={formDetails.getIn(['leaveBalance', 'label'])}
            name={formDetails.getIn(['leaveBalance', 'name'])}
            value={formDetails.getIn(['leaveBalance', 'value'])}
            placeholder={formDetails.getIn(['leaveBalance', 'placeholder'])}
            error={
              !formDetails.getIn(['leaveBalance', 'status'])
                ? formDetails.getIn(['leaveBalance', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Button fluid onClick={prevStep} content="Previous" />
          <Form.Button fluid onClick={nextStep} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default LeaveBalance;
