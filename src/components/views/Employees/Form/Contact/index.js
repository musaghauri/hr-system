import React, { Component } from 'react';
import { Form, Button, Segment, List } from 'semantic-ui-react';
import { TYPE_OPTIONS } from '@config/constants/type';
import { CONTACT_INITIAL_STATE } from '@config/constants/contact';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
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

  back = e => {
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
    const { formDetails } = this.props;
    const { index } = this.state;
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Contact Details</h1>
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
          <Button onClick={this.addAnotherEntry}>Add More</Button>
          <h3>List of Contacts</h3>
          <List celled animated ordered>
            {formDetails
              .getIn(['contactInformation'])
              .map((entry, contactI) => (
                <List.Item key={`contact_item_${contactI}`}>
                  {`${entry.getIn(['title', 'value'])}  ${entry.getIn([
                    'type',
                    'value',
                  ])}   ${entry.getIn(['detail', 'value'])}`}
                  <Button onClick={() => this.handleEdit(contactI)}>
                    Edit
                  </Button>
                  <Button
                    onClick={() =>
                      this.deleteEntry([
                        'formDetails',
                        'contactInformation',
                        contactI,
                      ])
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

export default Contact;
