import React, { Component } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { TYPE_OPTIONS } from '@config/constants/type';
import { CONTACT_INITIAL_STATE } from '@config/constants/contact';
import { fromJS } from 'immutable';
import TableGenerator from '@components/widgets/TableGenerator';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      headings: fromJS([
        {
          label: 'Title',
          name: 'title',
        },
        {
          label: 'Type',
          name: 'type',
        },
        {
          label: 'Detail',
          name: 'detail',
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
    updateValue(
      ['formDetails', 'contactInformation', index, name, 'value'],
      value
    );
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

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry } = this.props;
    const { size } = formDetails.getIn(['contactInformation']);
    if (size < 3) {
      const entries = formDetails.getIn(['contactInformation']).toJS();
      const value = [...entries, CONTACT_INITIAL_STATE];
      addAnotherEntry(['formDetails', 'contactInformation'], value);
      this.setState({ index: size });
    }
  };

  deleteEntry = path => {
    const { formDetails, deleteEntry } = this.props;
    const { size } = formDetails.getIn(['contactInformation']);
    if (size > 1) {
      deleteEntry(path);
      this.setState({ index: 0 });
    }
  };

  render() {
    const { formDetails, makeRows } = this.props;
    const { index, headings } = this.state;
    const contacts = makeRows(
      headings,
      formDetails.getIn(['contactInformation']),
      this.handleEdit,
      this.deleteEntry
    );
    return (
      <Form>
        <Header textAlign="center" as="h3">
          Contact Information
        </Header>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label={formDetails.getIn([
              'contactInformation',
              index,
              'title',
              'label',
            ])}
            name={formDetails.getIn([
              'contactInformation',
              index,
              'title',
              'name',
            ])}
            value={formDetails.getIn([
              'contactInformation',
              index,
              'title',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'contactInformation',
              index,
              'title',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'contactInformation',
                index,
                'title',
                'status',
              ])
                ? formDetails.getIn([
                    'contactInformation',
                    index,
                    'title',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
          <Form.Select
            type="text"
            options={TYPE_OPTIONS}
            label={formDetails.getIn([
              'contactInformation',
              index,
              'type',
              'label',
            ])}
            name={formDetails.getIn([
              'contactInformation',
              index,
              'type',
              'name',
            ])}
            value={formDetails.getIn([
              'contactInformation',
              index,
              'type',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'contactInformation',
              index,
              'type',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'contactInformation',
                index,
                'type',
                'status',
              ])
                ? formDetails.getIn([
                    'contactInformation',
                    index,
                    'type',
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
              'contactInformation',
              index,
              'detail',
              'label',
            ])}
            name={formDetails.getIn([
              'contactInformation',
              index,
              'detail',
              'name',
            ])}
            value={formDetails.getIn([
              'contactInformation',
              index,
              'detail',
              'value',
            ])}
            placeholder={formDetails.getIn([
              'contactInformation',
              index,
              'detail',
              'placeholder',
            ])}
            error={
              !formDetails.getIn([
                'contactInformation',
                index,
                'detail',
                'status',
              ])
                ? formDetails.getIn([
                    'contactInformation',
                    index,
                    'detail',
                    'errorText',
                  ])
                : false
            }
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button fluid onClick={this.addAnotherEntry} primary>
          Add Contact
        </Button>
        <h3>Contacts</h3>
        <TableGenerator headings={headings} rows={contacts} name="contacts" />
        <Form.Group widths="equal">
          <Form.Button fluid onClick={this.Previous} content="Previous" />
          <Form.Button fluid onClick={this.saveAndContinue} content="Next" />
        </Form.Group>
      </Form>
    );
  }
}

export default Contact;
