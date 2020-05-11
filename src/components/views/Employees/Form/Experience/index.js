import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { EXPERIENCE_INITIAL_STATE } from '@config/constants/experience';
import { fromJS } from 'immutable';
import TableGenerator from '@components/widgets/TableGenerator';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headings: fromJS([
        {
          label: 'Organization',
          name: 'organization',
        },
        {
          label: 'Designation',
          name: 'designation',
        },
        {
          label: 'Duration',
          name: 'duration',
        },
        {
          label: 'Leaving Reason',
          name: 'leavingReason',
        },
        {
          label: 'Salary',
          name: 'salary',
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
    updateValue(['formDetails', 'experience', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry, validateStep } = this.props;
    const { size } = formDetails.getIn(['experience']);
    const validatedObject = validateStep(true);
    if (validatedObject.validateFlag && size < 3) {
      const { experience } = validatedObject.updatedFormData;
      const value = [...experience, EXPERIENCE_INITIAL_STATE];
      addAnotherEntry(['formDetails', 'experience'], value);
      this.setState({ index: size });
    }
  };

  deleteEntry = path => {
    const { formDetails, deleteEntry } = this.props;
    const { size } = formDetails.getIn(['experience']);
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
    const { nextStep } = this.props;
    nextStep();
  };

  previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails, makeRows } = this.props;
    const { index, headings } = this.state;
    const experience = makeRows(
      headings,
      'experience',
      formDetails.getIn(['experience']),
      this.handleEdit,
      this.deleteEntry
    );
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Experience Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="text"
            label={formDetails.getIn([
              'experience',
              index,
              'organization',
              'label',
            ])}
            name={formDetails.getIn([
              'experience',
              index,
              'organization',
              'name',
            ])}
            value={formDetails.getIn([
              'experience',
              index,
              'organization',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'experience',
              index,
              'organization',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'experience',
                index,
                'organization',
                'status',
              ])
                ? formDetails.getIn([
                    'experience',
                    index,
                    'organization',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'experience',
              index,
              'designation',
              'label',
            ])}
            name={formDetails.getIn([
              'experience',
              index,
              'designation',
              'name',
            ])}
            value={formDetails.getIn([
              'experience',
              index,
              'designation',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'experience',
              index,
              'designation',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['experience', index, 'designation', 'status'])
                ? formDetails.getIn([
                    'experience',
                    index,
                    'designation',
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
            label={formDetails.getIn([
              'experience',
              index,
              'duration',
              'label',
            ])}
            name={formDetails.getIn(['experience', index, 'duration', 'name'])}
            value={formDetails.getIn([
              'experience',
              index,
              'duration',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'experience',
              index,
              'duration',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['experience', index, 'duration', 'status'])
                ? formDetails.getIn([
                    'experience',
                    index,
                    'duration',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'experience',
              index,
              'leavingReason',
              'label',
            ])}
            name={formDetails.getIn([
              'experience',
              index,
              'leavingReason',
              'name',
            ])}
            value={formDetails.getIn([
              'experience',
              index,
              'leavingReason',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'experience',
              index,
              'leavingReason',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'experience',
                index,
                'leavingReason',
                'status',
              ])
                ? formDetails.getIn([
                    'experience',
                    index,
                    'leavingReason',
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
            label={formDetails.getIn(['experience', index, 'salary', 'label'])}
            name={formDetails.getIn(['experience', index, 'salary', 'name'])}
            value={formDetails.getIn(['experience', index, 'salary', 'value'])}
            placeholder={formDetails.getIn([
              'experience',
              index,
              'salary',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['experience', index, 'salary', 'status'])
                ? formDetails.getIn([
                    'experience',
                    index,
                    'salary',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button fluid onClick={this.addAnotherEntry} primary>
          Add Experience
        </Button>
        <h3>Experience</h3>
        <TableGenerator
          headings={headings}
          rows={experience}
          name="experience"
        />
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default Experience;
