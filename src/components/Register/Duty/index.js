import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";
import { FREQUENCY_OPTIONS } from "@config/constants/frequency";
import { DateInput } from "semantic-ui-calendar-react";

class Duty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    this.props.updateValue(
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
      let value = [
        ...entries,
        {
          job: { value: "" },
          frequency: { value: "" },
          effectiveFrom: { value: "" },
          enchancedTill: { value: "" },
        },
      ];
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
    // this.props.nextStep();
    this.props.handleSubmit();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formDetails } = this.props;
    let { index } = this.state;
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Duties Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Job"
              type="text"
              name="job"
              value={formDetails.getIn(["duties", index, "job", "value"])}
              placeholder="Job"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Frequency"
              options={FREQUENCY_OPTIONS}
              type="text"
              name="frequency"
              value={formDetails.getIn(["duties", index, "frequency", "value"])}
              placeholder="Frequency"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Effective From"
              name="effectiveFrom"
              value={formDetails.getIn([
                "duties",
                index,
                "effectiveFrom",
                "value",
              ])}
              placeholder="Effective From"
              iconPosition="left"
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <DateInput
              fluid
              label="Enhanced Till"
              name="enhancedTill"
              value={formDetails.getIn([
                "duties",
                index,
                "enhancedTill",
                "value",
              ])}
              placeholder="Enhanced Till"
              iconPosition="left"
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add Entry</Button>
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
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default Duty;
