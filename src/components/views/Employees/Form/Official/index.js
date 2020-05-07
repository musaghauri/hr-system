import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { EMPLOYEE_STATUS_OPTIONS } from '@config/constants/employee';

class Official extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(['formDetails', 'officialInformation', name, 'value'], value);
  };

  saveAndContinue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  };

  Previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails, departments, getDepartmentsStatus } = this.props;
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Official Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            name={formDetails.getIn([
              'officialInformation',
              'employeeId',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'employeeId',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'employeeId',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'employeeId',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'employeeId',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'employeeId',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            type="text"
            options={EMPLOYEE_STATUS_OPTIONS}
            name={formDetails.getIn([
              'officialInformation',
              'employeeStatus',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'employeeStatus',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'employeeStatus',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'employeeStatus',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'employeeStatus',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'employeeStatus',
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
            name={formDetails.getIn([
              'officialInformation',
              'designation',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'designation',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'designation',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'designation',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'designation',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'designation',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            name={formDetails.getIn([
              'officialInformation',
              'socialSecurity',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'socialSecurity',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'socialSecurity',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'socialSecurity',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'socialSecurity',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'socialSecurity',
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
            name={formDetails.getIn([
              'officialInformation',
              'healthBenefits',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'healthBenefits',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'healthBenefits',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'healthBenefits',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'healthBenefits',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'healthBenefits',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            name={formDetails.getIn([
              'officialInformation',
              'providentFund',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'providentFund',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'providentFund',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'providentFund',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'providentFund',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'providentFund',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            type="text"
            loading={getDepartmentsStatus.get('loading')}
            options={departments.toJS()}
            name={formDetails.getIn([
              'officialInformation',
              'department',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'department',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'department',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'department',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'department',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'department',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <DateInput
            fluid
            dateFormat="MM-DD-YYYY"
            iconPosition="left"
            name={formDetails.getIn([
              'officialInformation',
              'joiningDate',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'joiningDate',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'joiningDate',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'joiningDate',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'joiningDate',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'joiningDate',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <DateInput
            fluid
            dateFormat="MM-DD-YYYY"
            iconPosition="left"
            name={formDetails.getIn([
              'officialInformation',
              'resignationDate',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'resignationDate',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'resignationDate',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'resignationDate',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'officialInformation',
                'resignationDate',
                'status',
              ])
                ? formDetails.getIn([
                    'officialInformation',
                    'resignationDate',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <DateInput
            fluid
            dateFormat="MM-DD-YYYY"
            iconPosition="left"
            name={formDetails.getIn([
              'officialInformation',
              'exitDate',
              'name',
            ])}
            label={formDetails.getIn([
              'officialInformation',
              'exitDate',
              'label',
            ])}
            placeholder={formDetails.getIn([
              'officialInformation',
              'exitDate',
              'placeholder',
            ])}
            value={formDetails.getIn([
              'officialInformation',
              'exitDate',
              'value',
            ])}
            error={
              !formDetails.getIn(['officialInformation', 'exitDate', 'status'])
                ? formDetails.getIn([
                    'officialInformation',
                    'exitDate',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.Previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default Official;
