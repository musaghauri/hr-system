import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { ACADEMIC_INITIAL_STATE } from '@config/constants/academic';
import { fromJS } from 'immutable';
import TableGenerator from '@components/widgets/TableGenerator';

class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headings: fromJS([
        {
          label: 'Degree Name',
          name: 'degreeName',
        },
        {
          label: 'Board',
          name: 'board',
        },
        {
          label: 'University',
          name: 'university',
        },
        {
          label: 'Marks',
          name: 'marks',
        },
        {
          label: 'Grade',
          name: 'grade',
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
    const { updateValue } = this.props;
    const { index } = this.state;
    updateValue(['formDetails', 'academics', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry, validateStep } = this.props;
    const { size } = formDetails.getIn(['academics']);
    if (validateStep() && size < 3) {
      const entries = formDetails.getIn(['academics']).toJS();
      const value = [...entries, ACADEMIC_INITIAL_STATE];
      addAnotherEntry(['formDetails', 'academics'], value);
      this.setState({ index: size });
    }
  };

  deleteEntry = path => {
    const { formDetails, deleteEntry } = this.props;
    const { size } = formDetails.getIn(['academics']);
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

  Previous = e => {
    e.preventDefault();
    const { prevStep } = this.props;
    prevStep();
  };

  render() {
    const { formDetails, makeRows } = this.props;
    const { index, headings } = this.state;
    const academics = makeRows(
      headings,
      'academics',
      formDetails.getIn(['academics']),
      this.handleEdit,
      this.deleteEntry
    );
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Academics Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="text"
            label={formDetails.getIn([
              'academics',
              index,
              'degreeName',
              'label',
            ])}
            name={formDetails.getIn(['academics', index, 'degreeName', 'name'])}
            value={formDetails.getIn([
              'academics',
              index,
              'degreeName',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'academics',
              index,
              'degreeName',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['academics', index, 'degreeName', 'status'])
                ? formDetails.getIn([
                    'academics',
                    index,
                    'degreeName',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn(['academics', index, 'board', 'label'])}
            name={formDetails.getIn(['academics', index, 'board', 'name'])}
            value={formDetails.getIn(['academics', index, 'board', 'value'])}
            placeholder={formDetails.getIn([
              'academics',
              index,
              'board',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['academics', index, 'board', 'status'])
                ? formDetails.getIn(['academics', index, 'board', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'academics',
              index,
              'university',
              'label',
            ])}
            name={formDetails.getIn(['academics', index, 'university', 'name'])}
            value={formDetails.getIn([
              'academics',
              index,
              'university',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'academics',
              index,
              'university',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['academics', index, 'university', 'status'])
                ? formDetails.getIn([
                    'academics',
                    index,
                    'university',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Input
            type="text"
            label={formDetails.getIn(['academics', index, 'marks', 'label'])}
            name={formDetails.getIn(['academics', index, 'marks', 'name'])}
            value={formDetails.getIn(['academics', index, 'marks', 'value'])}
            placeholder={formDetails.getIn([
              'academics',
              index,
              'marks',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['academics', index, 'marks', 'status'])
                ? formDetails.getIn(['academics', index, 'marks', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label={formDetails.getIn(['academics', index, 'grade', 'label'])}
            name={formDetails.getIn(['academics', index, 'grade', 'name'])}
            value={formDetails.getIn(['academics', index, 'grade', 'value'])}
            placeholder={formDetails.getIn([
              'academics',
              index,
              'grade',
              'placeholder',
            ])}
            error={
              !formDetails.getIn(['academics', index, 'grade', 'status'])
                ? formDetails.getIn(['academics', index, 'grade', 'errorText'])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button fluid onClick={this.addAnotherEntry} primary>
          Add Academic
        </Button>
        <h3>Academics</h3>
        <TableGenerator headings={headings} rows={academics} name="academics" />
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.Previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default Academic;
