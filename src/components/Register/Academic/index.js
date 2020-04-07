import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";

class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.formDetails.getIn(["academics"]).size - 1,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    this.props.updateValue(
      ["formDetails", "academics", index, name, "value"],
      value
    );
  };

  addAnotherEntry = (e) => {
    e.preventDefault();
    const { formDetails } = this.props;
    let size = formDetails.getIn(["academics"]).size;
    if (size < 3) {
      let entries = formDetails.getIn(["academics"]).toJS();
      let value = [
        ...entries,
        {
          degreeName: { value: "" },
          board: { value: "" },
          university: { value: "" },
          marks: { value: "" },
          grade: { value: "" },
        },
      ];
      this.props.addAnotherEntry(["formDetails", "academics"], value);
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
          <h1 className="ui centered">Enter Academics Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Degree Name"
              type="text"
              name="degreeName"
              value={formDetails.getIn([
                "academics",
                index,
                "degreeName",
                "value",
              ])}
              placeholder="Degree Name"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Board"
              type="text"
              name="board"
              value={formDetails.getIn(["academics", index, "board", "value"])}
              placeholder="Board"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="University"
              type="text"
              name="university"
              value={formDetails.getIn([
                "academics",
                index,
                "university",
                "value",
              ])}
              placeholder="University"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Marks"
              type="text"
              name="marks"
              value={formDetails.getIn(["academics", index, "marks", "value"])}
              placeholder="Marks"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Grade"
              type="text"
              name="grade"
              value={formDetails.getIn(["academics", index, "grade", "value"])}
              placeholder="Grade"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add Entry</Button>
          <h3>List of Academic</h3>
          <List celled animated ordered>
            {formDetails.getIn(["academics"]).map((entry, index) => {
              return (
                <List.Item key={`academic_item_${index}`}>
                  {`${entry.getIn(["degreeName", "value"])}   ${entry.getIn([
                    "board",
                    "value",
                  ])}   ${entry.getIn([
                    "university",
                    "value",
                  ])}   ${entry.getIn(["marks", "value"])}   ${entry.getIn([
                    "grade",
                    "value",
                  ])}
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

export default Academic;
