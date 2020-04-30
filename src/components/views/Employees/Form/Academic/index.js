import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";
import { ACADEMIC_INITIAL_STATE } from "@config/constants/academic";

class Academic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.formDetails.getIn(["academics"]).size - 1,
    };
  }
  handleChange = (e, { name, value })  => {
    const { updateValue } = this.props;
    let { index } = this.state;
    updateValue(
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
      let value = [ ...entries, ACADEMIC_INITIAL_STATE ];
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
    // console.log('academics', formDetails.get('academics').toJS())
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Academics Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="text"
              label={formDetails.getIn(['academics', index, 'degreeName', 'label'])}
              name={formDetails.getIn(['academics', index, 'degreeName', 'name'])}
              value={formDetails.getIn([
                "academics",
                index,
                "degreeName",
                "value",
              ])}
              placeholder={formDetails.getIn(['academics', index, 'degreeName', 'placeholder'])}
              error={
                !formDetails.getIn(['academics', index, 'degreeName', 'status'])
                  ? formDetails.getIn(['academics', index, 'degreeName', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              type="text"
              label={formDetails.getIn(['academics', index, 'board', 'label'])}
              name={formDetails.getIn(['academics', index, 'board', 'name'])}
              value={formDetails.getIn([
                "academics",
                index,
                "board",
                "value",
              ])}
              placeholder={formDetails.getIn(['academics', index, 'board', 'placeholder'])}
              error={
                !formDetails.getIn(['academics', index, 'board', 'status'])
                  ? formDetails.getIn(['academics', index, 'board', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              label={formDetails.getIn(['academics', index, 'university', 'label'])}
              name={formDetails.getIn(['academics', index, 'university', 'name'])}
              value={formDetails.getIn([
                "academics",
                index,
                "university",
                "value",
              ])}
              placeholder={formDetails.getIn(['academics', index, 'university', 'placeholder'])}
              error={
                !formDetails.getIn(['academics', index, 'university', 'status'])
                  ? formDetails.getIn(['academics', index, 'university', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              type="text"
              label={formDetails.getIn(['academics', index, 'marks', 'label'])}
              name={formDetails.getIn(['academics', index, 'marks', 'name'])}
              value={formDetails.getIn([
                "academics",
                index,
                "marks",
                "value",
              ])}
              placeholder={formDetails.getIn(['academics', index, 'marks', 'placeholder'])}
              error={
                !formDetails.getIn(['academics', index, 'marks', 'status'])
                  ? formDetails.getIn(['academics', index, 'marks', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              type="text"
              label={formDetails.getIn(['academics', index, 'grade', 'label'])}
              name={formDetails.getIn(['academics', index, 'grade', 'name'])}
              value={formDetails.getIn([
                "academics",
                index,
                "grade",
                "value",
              ])}
              placeholder={formDetails.getIn(['academics', index, 'grade', 'placeholder'])}
              error={
                !formDetails.getIn(['academics', index, 'grade', 'status'])
                  ? formDetails.getIn(['academics', index, 'grade', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add More</Button>
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
