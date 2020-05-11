import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { GENDER_OPTIONS } from '@config/constants/gender';
import { MARITAL_STATUS_OPTIONS } from '@config/constants/maritalStatus';
import { BLOOD_GROUP_OPTIONS } from '@config/constants/bloodGroup';

class Personal extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(['formDetails', 'personalInformation', name, 'value'], value);
  };

  saveAndContinue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  };

  previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const {
      formDetails,
      countries,
      states,
      cities,
      getCities,
      getStates,
      getCountriesStatus,
      getStatesStatus,
      getCitiesStatus,
    } = this.props;
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Personal Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="email"
            label={formDetails.getIn([
              'personalInformation',
              'companyEmail',
              'label',
            ])}
            name={formDetails.getIn([
              'personalInformation',
              'companyEmail',
              'name',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'companyEmail',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'companyEmail',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'companyEmail',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'companyEmail',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            type="text"
            label={formDetails.getIn([
              'personalInformation',
              'fatherName',
              'label',
            ])}
            name={formDetails.getIn([
              'personalInformation',
              'fatherName',
              'name',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'fatherName',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'fatherName',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'fatherName',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'fatherName',
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
            label={formDetails.getIn([
              'personalInformation',
              'dateOfBirth',
              'label',
            ])}
            name={formDetails.getIn([
              'personalInformation',
              'dateOfBirth',
              'name',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'dateOfBirth',
              'placeholder',
            ])}
            iconPosition="left"
            value={formDetails.getIn([
              'personalInformation',
              'dateOfBirth',
              'value',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'dateOfBirth',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'dateOfBirth',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            type="text"
            name={formDetails.getIn(['personalInformation', 'gender', 'name'])}
            label={formDetails.getIn([
              'personalInformation',
              'gender',
              'label',
            ])}
            options={GENDER_OPTIONS}
            value={formDetails.getIn([
              'personalInformation',
              'gender',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'gender',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'gender', 'status'])
                ? formDetails.getIn([
                    'personalInformation',
                    'gender',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            search
            type="text"
            options={countries.toJS()}
            loading={getCountriesStatus.get('loading')}
            name={formDetails.getIn([
              'personalInformation',
              'nationality',
              'name',
            ])}
            label={formDetails.getIn([
              'personalInformation',
              'nationality',
              'label',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'nationality',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'nationality',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'nationality',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'nationality',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            search
            type="text"
            options={countries.toJS()}
            loading={getCountriesStatus.get('loading')}
            name={formDetails.getIn(['personalInformation', 'country', 'name'])}
            label={formDetails.getIn([
              'personalInformation',
              'country',
              'label',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'country',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'country',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'country', 'status'])
                ? formDetails.getIn([
                    'personalInformation',
                    'country',
                    'errorText',
                  ])
                : false
            }
            onChange={(e, { name, value }) => {
              getStates(value);
              this.handleChange(e, { name, value });
            }}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            search
            type="text"
            options={states.toJS()}
            // disabled={!getStatesStatus.get('loaded')}
            loading={getStatesStatus.get('loading')}
            name={formDetails.getIn(['personalInformation', 'state', 'name'])}
            label={formDetails.getIn(['personalInformation', 'state', 'label'])}
            value={formDetails.getIn(['personalInformation', 'state', 'value'])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'state',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'state', 'status'])
                ? formDetails.getIn([
                    'personalInformation',
                    'state',
                    'errorText',
                  ])
                : false
            }
            onChange={(e, { name, value }) => {
              getCities(value);
              this.handleChange(e, { name, value });
            }}
          />
          <Form.Select
            fluid
            search
            type="text"
            options={cities.toJS()}
            loading={getCitiesStatus.get('loading')}
            // disabled={!getCitiesStatus.get('loaded')}
            name={formDetails.getIn(['personalInformation', 'city', 'name'])}
            label={formDetails.getIn(['personalInformation', 'city', 'label'])}
            value={formDetails.getIn(['personalInformation', 'city', 'value'])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'city',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'city', 'status'])
                ? formDetails.getIn([
                    'personalInformation',
                    'city',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="text"
            name={formDetails.getIn([
              'personalInformation',
              'religion',
              'name',
            ])}
            label={formDetails.getIn([
              'personalInformation',
              'religion',
              'label',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'religion',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'religion',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'religion', 'status'])
                ? formDetails.getIn([
                    'personalInformation',
                    'religion',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            type="text"
            options={MARITAL_STATUS_OPTIONS}
            name={formDetails.getIn([
              'personalInformation',
              'maritalStatus',
              'name',
            ])}
            label={formDetails.getIn([
              'personalInformation',
              'maritalStatus',
              'label',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'maritalStatus',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'maritalStatus',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'maritalStatus',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'maritalStatus',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            search
            type="text"
            options={BLOOD_GROUP_OPTIONS}
            name={formDetails.getIn([
              'personalInformation',
              'bloodGroup',
              'name',
            ])}
            label={formDetails.getIn([
              'personalInformation',
              'bloodGroup',
              'label',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'bloodGroup',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'bloodGroup',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'bloodGroup',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'bloodGroup',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            type="text"
            name={formDetails.getIn([
              'personalInformation',
              'disability',
              'name',
            ])}
            label={formDetails.getIn([
              'personalInformation',
              'disability',
              'label',
            ])}
            value={formDetails.getIn([
              'personalInformation',
              'disability',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'disability',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'personalInformation',
                'disability',
                'status',
              ])
                ? formDetails.getIn([
                    'personalInformation',
                    'disability',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="text"
            name={formDetails.getIn(['personalInformation', 'cnic', 'name'])}
            label={formDetails.getIn(['personalInformation', 'cnic', 'label'])}
            value={formDetails.getIn(['personalInformation', 'cnic', 'value'])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'cnic',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'cnic', 'status'])
                ? formDetails.getIn([
                    'personalInformation',
                    'cnic',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            type="text"
            name={formDetails.getIn(['personalInformation', 'ntn', 'name'])}
            label={formDetails.getIn(['personalInformation', 'ntn', 'label'])}
            value={formDetails.getIn(['personalInformation', 'ntn', 'value'])}
            placeholder={formDetails.getIn([
              'personalInformation',
              'ntn',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['personalInformation', 'ntn', 'status'])
                ? formDetails.getIn(['personalInformation', 'ntn', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Select
          fluid
          search
          type="text"
          options={cities.toJS()}
          loading={getCitiesStatus.get('loading')}
          // disabled={!getCitiesStatus.get('loaded')}
          name={formDetails.getIn(['personalInformation', 'domicile', 'name'])}
          label={formDetails.getIn([
            'personalInformation',
            'domicile',
            'label',
          ])}
          value={formDetails.getIn([
            'personalInformation',
            'domicile',
            'value',
          ])}
          placeholder={formDetails.getIn([
            'personalInformation',
            'domicile',
            'placeholder',
          ])}
          error={
            !formDetails.getIn(['personalInformation', 'domicile', 'status'])
              ? formDetails.getIn([
                  'personalInformation',
                  'domicile',
                  'errorText',
                ])
              : false
          }
          onChange={this.handleChange}
        />
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default Personal;
