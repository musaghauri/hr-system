import React, { Component } from 'react';
import { Form, Button, Segment, List } from 'semantic-ui-react';
import { GENDER_OPTIONS } from '@config/constants/gender';
import { RELATION_OPTIONS } from '@config/constants/relation';
import { DateInput } from 'semantic-ui-calendar-react';
import { DEPENDENT_INITIAL_STATE } from '@config/constants/dependent';

class Dependent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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

  back = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails } = this.props;
    const { index } = this.state;
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Dependents Details</h1>
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
                  ? formDetails.getIn([
                      'dependents',
                      index,
                      'name',
                      'errorText',
                    ])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Select
              type="text"
              options={GENDER_OPTIONS}
              label={formDetails.getIn([
                'dependents',
                index,
                'gender',
                'label',
              ])}
              name={formDetails.getIn(['dependents', index, 'gender', 'name'])}
              value={formDetails.getIn([
                'dependents',
                index,
                'gender',
                'value',
              ])}
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
              name={formDetails.getIn([
                'dependents',
                index,
                'relation',
                'name',
              ])}
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
              label={formDetails.getIn([
                'dependents',
                index,
                'contact',
                'label',
              ])}
              name={formDetails.getIn(['dependents', index, 'contact', 'name'])}
              value={formDetails.getIn([
                'dependents',
                index,
                'contact',
                'value',
              ])}
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
                !formDetails.getIn([
                  'dependents',
                  index,
                  'dateOfBirth',
                  'status',
                ])
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
          <Button onClick={this.addAnotherEntry}>Add More</Button>
          <h3>List of Dependents</h3>
          <List celled animated ordered>
            {formDetails.getIn(['dependents']).map((entry, dependentsI) => (
              <List.Item key={`dependents_item_${dependentsI}`}>
                {`${entry.getIn(['name', 'value'])}   ${entry.getIn([
                  'gender',
                  'value',
                ])}   ${entry.getIn(['relation', 'value'])}   ${entry.getIn([
                  'contact',
                  'value',
                ])}    ${entry.getIn(['dateOfBirth', 'value'])}
                    `}
                <Button onClick={() => this.handleEdit(dependentsI)}>
                  Edit
                </Button>
                <Button
                  onClick={() =>
                    this.deleteEntry(['formDetails', 'dependents', dependentsI])
                  }
                >
                  Remove
                </Button>
              </List.Item>
            ))}
          </List>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default Dependent;
