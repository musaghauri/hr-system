import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class Academic extends Component {
  handleChange = (name, value) => {
    console.log(name, value);
    this.props.updateFormDetails("academics", name, value);
  };
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formDetails } = this.props;
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
              value={formDetails.getIn(["academics", "degreeName", "value"])}
              placeholder="Select a type"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Board"
              type="text"
              name="board"
              value={formDetails.getIn(["academics", "board", "value"])}
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
              value={formDetails.getIn(["academics", "university", "value"])}
              placeholder="University"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Marks"
              type="text"
              name="marks"
              value={formDetails.getIn(["academics", "marks", "value"])}
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
              value={formDetails.getIn(["academics", "grade", "value"])}
              placeholder="Grade"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default Academic;
