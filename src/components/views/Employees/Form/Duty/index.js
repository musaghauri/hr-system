import React, { Component } from "react";
import { Form, Button, Segment, List, Message } from "semantic-ui-react";
import { FREQUENCY_OPTIONS } from "@config/constants/frequency";
import { DUTY_INITIAL_STATE } from "@config/constants/duty";
import { DateInput } from "semantic-ui-calendar-react";
import _assign from 'lodash/assign';

class Duty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (e, { name, value })=> {
    let { index } = this.state;
    const { updateValue } = this.props;
    updateValue(
      ["formDetails", "duties", index, name, "value"],
      value
    );
  };
  addAnotherEntry = (e) => {
    e.preventDefault();
    const { formDetails } = this.props;
    let size = formDetails.getIn(["duties"]).size;
    if (size < 2) {
      let entries = formDetails.getIn(["duties"]).toJS();
      let value = [ ...entries, DUTY_INITIAL_STATE ];
      this.props.addAnotherEntry(["formDetails", "duties"], value);
      this.setState((prevState) => {
        index: prevState.index++;
      });
    }
  };
  handleEdit = (index) => {
    this.setState({ index });
  };
  saveAndContinue = (e) => {
    e.preventDefault();
    const { validateForm, updateValue, handleSubmit } = this.props;
    const { formDetails } = this.props;
    const modifiedUser = formDetails.toJS();
    console.log('modifiedUser', modifiedUser);
    const result = validateForm(modifiedUser);
    const newFormDetails = _assign(modifiedUser, result.updatedFormData);
    console.log(result);
    updateValue(['formDetails'], newFormDetails);
    if (result.validateFlag) {
      handleSubmit(newFormDetails);
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formDetails, submitColor, submitStatus, successMessage } = this.props;
    let { index } = this.state;
    // console.log('duties', formDetails.get('duties').toJS())
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Duties Details</h1>
          {submitStatus.get('error') && (
            <Message negative floating>
              {submitStatus.get('error')}
            </Message>
          )}
          {submitStatus.get('loaded') && (
            <Message success>{successMessage}</Message>
          )}
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="text"
              label={formDetails.getIn(['duties', index, 'job', 'label'])}
              name={formDetails.getIn(['duties', index, 'job', 'name'])}
              value={formDetails.getIn([
                "duties",
                index,
                "job",
                "value",
              ])}
              placeholder={formDetails.getIn(['duties', index, 'job', 'placeholder'])}
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
              value={formDetails.getIn([
                "duties",
                index,
                "frequency",
                "value",
              ])}
              placeholder={formDetails.getIn(['duties', index, 'frequency', 'placeholder'])}
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
              iconPosition="left"
              label={formDetails.getIn(['duties', index, 'effectiveFrom', 'label'])}
              name={formDetails.getIn(['duties', index, 'effectiveFrom', 'name'])}
              value={formDetails.getIn([
                "duties",
                index,
                "effectiveFrom",
                "value",
              ])}
              placeholder={formDetails.getIn(['duties', index, 'effectiveFrom', 'placeholder'])}
              error={
                !formDetails.getIn(['duties', index, 'effectiveFrom', 'status'])
                  ? formDetails.getIn(['duties', index, 'effectiveFrom', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <DateInput
              fluid
              iconPosition="left"
              label={formDetails.getIn(['duties', index, 'enhancedTill', 'label'])}
              name={formDetails.getIn(['duties', index, 'enhancedTill', 'name'])}
              value={formDetails.getIn([
                "duties",
                index,
                "enhancedTill",
                "value",
              ])}
              placeholder={formDetails.getIn(['duties', index, 'enhancedTill', 'placeholder'])}
              error={
                !formDetails.getIn(['duties', index, 'enhancedTill', 'status'])
                  ? formDetails.getIn(['duties', index, 'enhancedTill', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add More</Button>
          <h3>List of Duties</h3>
          <List celled animated ordered>
            {formDetails.getIn(["duties"]).map((entry, index) => {
              return (
                <List.Item key={`duties_item_${index}`}>
                  {`${entry.getIn(["job", "value"])}      ${entry.getIn([
                    "frequency",
                    "value",
                  ])}    ${entry.getIn([
                    "effectiveFrom",
                    "value",
                  ])}   ${entry.getIn(["enhancedTill", "value"])}  
                    `}
                  <Button onClick={() => this.handleEdit(index)}>Edit</Button>
                </List.Item>
              );
            })}
          </List>
          <Button onClick={this.back}>Back</Button>
          <Button 
            loading={submitStatus.get('loading')}
            color={submitColor}
            type="submit"
            onClick={this.saveAndContinue}
          >
          Save
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default Duty;
