import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { MODE_OF_PAYMENT_OPTIONS } from '@config/constants/payment';

class Salary extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(['formDetails', 'salarySettings', name, 'value'], value);
  };

  render() {
    const { formDetails, prevStep, nextStep } = this.props;
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Salary Information
        </Header>
        <Form.Group widths="equal">
          <Form.Select
            type="text"
            options={MODE_OF_PAYMENT_OPTIONS}
            label={formDetails.getIn([
              'salarySettings',
              'paymentMode',
              'label',
            ])}
            name={formDetails.getIn(['salarySettings', 'paymentMode', 'name'])}
            value={formDetails.getIn([
              'salarySettings',
              'paymentMode',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'salarySettings',
              'paymentMode',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['salarySettings', 'paymentMode', 'status'])
                ? formDetails.getIn([
                    'salarySettings',
                    'paymentMode',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'salarySettings',
              'exGratiaOnOvertime',
              'label',
            ])}
            name={formDetails.getIn([
              'salarySettings',
              'exGratiaOnOvertime',
              'name',
            ])}
            value={formDetails.getIn([
              'salarySettings',
              'exGratiaOnOvertime',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'salarySettings',
              'exGratiaOnOvertime',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'salarySettings',
                'exGratiaOnOvertime',
                'status',
              ])
                ? formDetails.getIn([
                    'salarySettings',
                    'exGratiaOnOvertime',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label={formDetails.getIn(['salarySettings', 'gratuity', 'label'])}
            name={formDetails.getIn(['salarySettings', 'gratuity', 'name'])}
            value={formDetails.getIn(['salarySettings', 'gratuity', 'value'])}
            placeholder={formDetails.getIn([
              'salarySettings',
              'gratuity',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['salarySettings', 'gratuity', 'status'])
                ? formDetails.getIn(['salarySettings', 'gratuity', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'salarySettings',
              'bankDetails',
              'label',
            ])}
            name={formDetails.getIn(['salarySettings', 'bankDetails', 'name'])}
            value={formDetails.getIn([
              'salarySettings',
              'bankDetails',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'salarySettings',
              'bankDetails',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['salarySettings', 'bankDetails', 'status'])
                ? formDetails.getIn([
                    'salarySettings',
                    'bankDetails',
                    'errorText',
                  ])
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

export default Salary;
