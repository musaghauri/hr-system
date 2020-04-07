import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";
import { TYPE_OPTIONS } from "@config/constants/type";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    this.props.updateValue(
      ["formDetails", "contactInformation", index, name, "value"],
      value
    );
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
  addAnotherEntry = (e) => {
    e.preventDefault();
    const { formDetails } = this.props;
    let size = formDetails.getIn(["contactInformation"]).size;
    if (size < 3) {
      let entries = formDetails.getIn(["contactInformation"]).toJS();
      let value = [
        ...entries,
        {
          title: { value: "" },
          type: { value: "" },
          detail: { value: "" },
        },
      ];
      this.props.addAnotherEntry(["formDetails", "contactInformation"], value);
      this.setState((prevState) => {
        index: prevState.index++;
      });
    }
  };

  render() {
    const { formDetails } = this.props;
    let { index } = this.state;
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Contact Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              type="text"
              name="title"
              value={formDetails.getIn([
                "contactInformation",
                index,
                "title",
                "value",
              ])}
              placeholder="Title"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              label="Type"
              options={TYPE_OPTIONS}
              type="text"
              name="type"
              value={formDetails.getIn([
                "contactInformation",
                index,
                "type",
                "value",
              ])}
              placeholder="Select a type"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Detail"
              type="text"
              name="detail"
              value={formDetails.getIn([
                "contactInformation",
                index,
                "detail",
                "value",
              ])}
              placeholder="Detail"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add Entry</Button>
          <h3>List of Contacts</h3>
          <List celled animated ordered>
            {formDetails.getIn(["contactInformation"]).map((entry, index) => {
              return (
                <List.Item key={`contact_item_${index}`}>
                  {`${entry.getIn(["title", "value"])}  ${entry.getIn([
                    "type",
                    "value",
                  ])}   ${entry.getIn(["detail", "value"])}`}
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

export default Contact;
