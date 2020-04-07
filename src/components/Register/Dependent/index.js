import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";
import { GENDER_OPTIONS } from "@config/constants/gender";
import { RELATION_OPTIONS } from "@config/constants/relation";
import { DateInput } from "semantic-ui-calendar-react";

class Dependent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    this.props.updateValue(
      ["formDetails", "dependants", index, name, "value"],
      value
    );
  };
  addAnotherEntry = (e) => {
    e.preventDefault();
    const { formDetails } = this.props;
    let size = formDetails.getIn(["dependants"]).size;
    if (size < 3) {
      let entries = formDetails.getIn(["dependants"]).toJS();
      let value = [
        ...entries,
        {
          name: { value: "" },
          gender: { value: "" },
          relation: { value: "" },
          contact: { value: "" },
          dateOfBirth: { value: "" },
        },
      ];
      this.props.addAnotherEntry(["formDetails", "dependants"], value);
      this.setState((prevState) => {
        index: prevState.index++;
      });
    }
  };
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleEdit = (index) => {
    this.setState({ index });
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
          <h1 className="ui centered">Enter Dependents Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              type="text"
              name="name"
              value={formDetails.getIn(["dependants", index, "name", "value"])}
              placeholder="Name"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Gender"
              options={GENDER_OPTIONS}
              type="text"
              name="gender"
              value={formDetails.getIn([
                "dependants",
                index,
                "gender",
                "value",
              ])}
              placeholder="Select gender"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              label="Relation"
              options={RELATION_OPTIONS}
              type="text"
              name="relation"
              value={formDetails.getIn([
                "dependants",
                index,
                "relation",
                "value",
              ])}
              placeholder="Select gender"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Contact"
              type="text"
              name="contact"
              value={formDetails.getIn([
                "dependants",
                index,
                "contact",
                "value",
              ])}
              placeholder="Contact"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Date of Birth"
              name="dateOfBirth"
              value={formDetails.getIn([
                "dependants",
                index,
                "dateOfBirth",
                "value",
              ])}
              placeholder="Date of Birth"
              iconPosition="left"
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add Entry</Button>
          <h3>List of Dependants</h3>
          <List celled animated ordered>
            {formDetails.getIn(["dependants"]).map((entry, index) => {
              return (
                <List.Item key={`dependants_item_${index}`}>
                  {`${entry.getIn(["name", "value"])}   ${entry.getIn([
                    "gender",
                    "value",
                  ])}   ${entry.getIn(["relation", "value"])}   ${entry.getIn([
                    "contact",
                    "value",
                  ])}    ${entry.getIn(["dateOfBirth", "value"])}
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

export default Dependent;
