import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    this.props.updateValue(
      ["formDetails", "experience", index, name, "value"],
      value
    );
  };
  addAnotherEntry = (e) => {
    e.preventDefault();
    const { formDetails } = this.props;
    let size = formDetails.getIn(["experience"]).size;
    if (size < 3) {
      let entries = formDetails.getIn(["experience"]).toJS();
      let value = [
        ...entries,
        {
          organization: { value: "" },
          designation: { value: "" },
          duration: { value: "" },
          leavingReason: { value: "" },
          salary: { value: "" },
        },
      ];
      this.props.addAnotherEntry(["formDetails", "experience"], value);
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
    this.props.nextStep();
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
          <h1 className="ui centered">Enter Experience Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Organization"
              type="text"
              name="organization"
              value={formDetails.getIn([
                "experience",
                index,
                "organization",
                "value",
              ])}
              placeholder="Organization"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Designation"
              type="text"
              name="designation"
              value={formDetails.getIn([
                "experience",
                index,
                "designation",
                "value",
              ])}
              placeholder="Designation"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Duration"
              type="text"
              name="duration"
              value={formDetails.getIn([
                "experience",
                index,
                "duration",
                "value",
              ])}
              placeholder="Duration"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Leaving Reason"
              type="text"
              name="leavingReason"
              value={formDetails.getIn([
                "experience",
                index,
                "leavingReason",
                "value",
              ])}
              placeholder="Leaving Reason"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Salary (Optional)"
              type="text"
              name="salary"
              value={formDetails.getIn([
                "experience",
                index,
                "salary",
                "value",
              ])}
              placeholder="Salary"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add Entry</Button>
          <h3>List of Experience</h3>
          <List celled animated ordered>
            {formDetails.getIn(["experience"]).map((entry, index) => {
              return (
                <List.Item key={`experience_item${index}`}>
                  {`${entry.getIn(["organization", "value"])}   ${entry.getIn([
                    "designation",
                    "value",
                  ])}   ${entry.getIn(["duration", "value"])}   ${entry.getIn([
                    "leavingReason",
                    "value",
                  ])}    ${entry.getIn(["salary", "value"])}    
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

export default Experience;
