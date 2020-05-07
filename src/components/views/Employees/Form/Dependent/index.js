import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { GENDER_OPTIONS } from '@config/constants/gender';
import { RELATION_OPTIONS } from '@config/constants/relation';
import { DateInput } from 'semantic-ui-calendar-react';
import { DEPENDENT_INITIAL_STATE } from '@config/constants/dependent';
import { fromJS } from 'immutable';
import TableGenerator from '@components/widgets/TableGenerator';

class Dependent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headings: fromJS([
        {
          label: 'Name',
          name: 'name',
        },
        {
          label: 'Gender',
          name: 'gender',
        },
        {
          label: 'Relation',
          name: 'relation',
        },
        {
          label: 'Contact',
          name: 'contact',
        },
        {
          label: 'Date of Birth',
          name: 'dateOfBirth',
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
    updateValue(['formDetails', 'dependents', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry } = this.props;
    const { size } = formDetails.getIn(['dependents']);
    if (size < 3) {
      const entries = formDetails.getIn(['dependents']).toJS();
      const value = [...entries, DEPENDENT_INITIAL_STATE];
      addAnotherEntry(['formDetails', 'dependents'], value);
      this.setState({ index: size });
    }
  };

  deleteEntry = path => {
    const { formDetails, deleteEntry } = this.props;
    const { size } = formDetails.getIn(['dependents']);
    if (size > 1) {
      deleteEntry(path);
      this.setState({ index: 0 });
    }
  };

  saveAndContinue = e => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  };

  handleEdit = index => {
    this.setState({ index });
  };

  Previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails, makeRows } = this.props;
    const { index, headings } = this.state;
    const dependents = makeRows(
      headings,
      formDetails.getIn(['dependents']),
      this.handleEdit,
      this.deleteEntry
    );
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Dependents Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label={formDetails.getIn(['dependents', index, 'name', 'label'])}
            name={formDetails.getIn(['dependents', index, 'name', 'name'])}
            value={formDetails.getIn(['dependents', index, 'name', 'value'])}
            placeholder={formDetails.getIn([
              'dependents',
              index,
              'name',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['dependents', index, 'name', 'status'])
                ? formDetails.getIn(['dependents', index, 'name', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            type="text"
            options={GENDER_OPTIONS}
            label={formDetails.getIn(['dependents', index, 'gender', 'label'])}
            name={formDetails.getIn(['dependents', index, 'gender', 'name'])}
            value={formDetails.getIn(['dependents', index, 'gender', 'value'])}
            placeholder={formDetails.getIn([
              'dependents',
              index,
              'gender',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['dependents', index, 'gender', 'status'])
                ? formDetails.getIn([
                    'dependents',
                    index,
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
            type="text"
            options={RELATION_OPTIONS}
            label={formDetails.getIn([
              'dependents',
              index,
              'relation',
              'label',
            ])}
            name={formDetails.getIn(['dependents', index, 'relation', 'name'])}
            value={formDetails.getIn([
              'dependents',
              index,
              'relation',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'dependents',
              index,
              'relation',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['dependents', index, 'relation', 'status'])
                ? formDetails.getIn([
                    'dependents',
                    index,
                    'relation',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn(['dependents', index, 'contact', 'label'])}
            name={formDetails.getIn(['dependents', index, 'contact', 'name'])}
            value={formDetails.getIn(['dependents', index, 'contact', 'value'])}
            placeholder={formDetails.getIn([
              'dependents',
              index,
              'contact',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['dependents', index, 'contact', 'status'])
                ? formDetails.getIn([
                    'dependents',
                    index,
                    'contact',
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
            label={formDetails.getIn([
              'dependents',
              index,
              'dateOfBirth',
              'label',
            ])}
            name={formDetails.getIn([
              'dependents',
              index,
              'dateOfBirth',
              'name',
            ])}
            value={formDetails.getIn([
              'dependents',
              index,
              'dateOfBirth',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'dependents',
              index,
              'dateOfBirth',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['dependents', index, 'dateOfBirth', 'status'])
                ? formDetails.getIn([
                    'dependents',
                    index,
                    'dateOfBirth',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button fluid onClick={this.addAnotherEntry} primary>
          Add Dependent
        </Button>
        <h3>Dependents</h3>
        <TableGenerator
          headings={headings}
          rows={dependents}
          name="dependents"
        />
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.Previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default Dependent;
