import React, { Component } from 'react';
import { Form, Button, Segment, List } from 'semantic-ui-react';
import { ACADEMIC_INITIAL_STATE } from '@config/constants/experience';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleChange = (e, { name, value }) => {
    const { index } = this.state;
    const { updateValue } = this.props;
    updateValue(['formDetails', 'experience', index, name, 'value'], value);
  };

  addAnotherEntry = e => {
    e.preventDefault();
    const { formDetails, addAnotherEntry } = this.props;
    const { size } = formDetails.getIn(['experience']);
    if (size < 3) {
      const entries = formDetails.getIn(['experience']).toJS();
      const value = [...entries, ACADEMIC_INITIAL_STATE];
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
          <h1 className="ui centered">Enter Experience Details</h1>
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
                !formDetails.getIn([
                  'experience',
                  index,
                  'designation',
                  'status',
                ])
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
              name={formDetails.getIn([
                'experience',
                index,
                'duration',
                'name',
              ])}
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
              label={formDetails.getIn([
                'experience',
                index,
                'salary',
                'label',
              ])}
              name={formDetails.getIn(['experience', index, 'salary', 'name'])}
              value={formDetails.getIn([
                'experience',
                index,
                'salary',
                'value',
              ])}
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
          <Button onClick={this.addAnotherEntry}>Add More</Button>
          <h3>List of Experience</h3>
          <List celled animated ordered>
            {formDetails.getIn(['experience']).map((entry, experienceI) => (
              <List.Item key={`experience_item${experienceI}`}>
                {`${entry.getIn(['organization', 'value'])}   ${entry.getIn([
                  'designation',
                  'value',
                ])}   ${entry.getIn(['duration', 'value'])}   ${entry.getIn([
                  'leavingReason',
                  'value',
                ])}    ${entry.getIn(['salary', 'value'])}    
                    `}
                <Button onClick={() => this.handleEdit(experienceI)}>
                  Edit
                </Button>
                <Button
                  onClick={() =>
                    this.deleteEntry(['formDetails', 'experience', experienceI])
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

export default Experience;
