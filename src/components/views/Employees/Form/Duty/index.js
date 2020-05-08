import React, { Component } from 'react';
import { Form, Button, Message, Header } from 'semantic-ui-react';
import { FREQUENCY_OPTIONS } from '@config/constants/frequency';
import { DUTY_INITIAL_STATE } from '@config/constants/duty';
import { DateInput } from 'semantic-ui-calendar-react';
import _assign from 'lodash/assign';
import { fromJS } from 'immutable';
import TableGenerator from '@components/widgets/TableGenerator';

class Duty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headings: fromJS([
        {
          label: 'Job',
          name: 'job',
        },
        {
          label: 'Frequency',
          name: 'frequency',
        },
        {
          label: 'Effective From',
          name: 'effectiveFrom',
        },
        {
          label: 'Enhanced Till',
          name: 'enhancedTill',
        },
        {
          label: 'Edit',
          name: 'edit',
        },
        {
          label: 'Remove',
          name: 'remove',
        },
      ]),
    };
  }

  handleChange = (e, { name, value }) => {
    const { index } = this.state;
    const { updateValue } = this.props;
    updateValue(['formDetails', 'duties', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry, validateStep } = this.props;
    const { size } = formDetails.getIn(['duties']);
    const validatedObject = validateStep(true);
    if (validatedObject.validateFlag && size < 3) {
      const { duties } = validatedObject.updatedFormData;
      const value = [...duties, DUTY_INITIAL_STATE];
      addAnotherEntry(['formDetails', 'duties'], value);
      this.setState({ index: size });
    }
  };

  deleteEntry = path => {
    const { formDetails, deleteEntry } = this.props;
    const { size } = formDetails.getIn(['duties']);
    if (size > 1) {
      deleteEntry(path);
      this.setState({ index: 0 });
    }
  };

  handleEdit = index => {
    this.setState({ index });
  };

  saveAndContinue = e => {
    e.preventDefault();
    const { validateForm, updateValue, handleSubmit, formDetails } = this.props;
    const modifiedUser = formDetails.toJS();
    const result = validateForm(modifiedUser);
    const newFormDetails = _assign(modifiedUser, result.updatedFormData);
    console.log(result);
    updateValue(['formDetails'], newFormDetails);
    if (result.validateFlag) {
      handleSubmit(newFormDetails);
    }
  };

  Previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const {
      formDetails,
      submitLabel,
      submitColor,
      submitStatus,
      successMessage,
      makeRows,
    } = this.props;
    const { index, headings } = this.state;
    const duties = makeRows(
      headings,
      'duties',
      formDetails.getIn(['duties']),
      this.handleEdit,
      this.deleteEntry
    );
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Duties Information
        </Header>
        {submitStatus.get('error') && (
          <Message negative floating>
            {submitStatus.get('error')}
          </Message>
        )}
        {submitStatus.get('loaded') && (
          <Message
            style={{
              PreviousgroundColor: '#fcfff5',
              color: '#2c662d',
            }}
          >
            {successMessage}
          </Message>
        )}
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="text"
            label={formDetails.getIn(['duties', index, 'job', 'label'])}
            name={formDetails.getIn(['duties', index, 'job', 'name'])}
            value={formDetails.getIn(['duties', index, 'job', 'value'])}
            placeholder={formDetails.getIn([
              'duties',
              index,
              'job',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['duties', index, 'job', 'status'])
                ? formDetails.getIn(['duties', index, 'job', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            type="text"
            options={FREQUENCY_OPTIONS}
            label={formDetails.getIn(['duties', index, 'frequency', 'label'])}
            name={formDetails.getIn(['duties', index, 'frequency', 'name'])}
            value={formDetails.getIn(['duties', index, 'frequency', 'value'])}
            placeholder={formDetails.getIn([
              'duties',
              index,
              'frequency',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['duties', index, 'frequency', 'status'])
                ? formDetails.getIn(['duties', index, 'frequency', 'errorText'])
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
            label={formDetails.getIn([
              'duties',
              index,
              'effectiveFrom',
              'label',
            ])}
            name={formDetails.getIn(['duties', index, 'effectiveFrom', 'name'])}
            value={formDetails.getIn([
              'duties',
              index,
              'effectiveFrom',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'duties',
              index,
              'effectiveFrom',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['duties', index, 'effectiveFrom', 'status'])
                ? formDetails.getIn([
                    'duties',
                    index,
                    'effectiveFrom',
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
            label={formDetails.getIn([
              'duties',
              index,
              'enhancedTill',
              'label',
            ])}
            name={formDetails.getIn(['duties', index, 'enhancedTill', 'name'])}
            value={formDetails.getIn([
              'duties',
              index,
              'enhancedTill',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'duties',
              index,
              'enhancedTill',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['duties', index, 'enhancedTill', 'status'])
                ? formDetails.getIn([
                    'duties',
                    index,
                    'enhancedTill',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button fluid onClick={this.addAnotherEntry} primary>
          Add Duty
        </Button>
        <h3>Duties</h3>
        <TableGenerator headings={headings} rows={duties} name="duties" />
        <Form.Group widths="equal">
          <Form.Button
            fluid
            onClick={this.Previous}
            style={{ marginBottom: '10px' }}
            content="Previous"
          />
          <Form.Button
            fluid
            loading={submitStatus.get('loading')}
            color={submitColor}
            type="submit"
            onClick={this.saveAndContinue}
            style={{ marginBottom: '10px' }}
            content={submitLabel}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default Duty;
