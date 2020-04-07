import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";
import { COMPANY_ASSETS_OPTIONS } from "@config/constants/companyAsset";
import { DateInput } from "semantic-ui-calendar-react";

class CompanyAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    this.props.updateValue(
      ["formDetails", "companyAssets", index, name, "value"],
      value
    );
  };
  addAnotherEntry = (e) => {
    e.preventDefault();
    const { formDetails } = this.props;
    let size = formDetails.getIn(["companyAssets"]).size;
    if (size < 2) {
      let contacts = formDetails.getIn(["companyAssets"]).toJS();
      console.log(contacts);
      let value = [
        ...contacts,
        {
          id: { value: "" },
          detail: { value: "" },
          returnable: { value: true },
          status: { value: false },
          issueData: { value: "" },
        },
      ];
      this.props.addAnotherEntry(["formDetails", "companyAssets"], value);
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
    let returnable = formDetails.getIn([
      "companyAssets",
      index,
      "returnable",
      "value",
    ]);
    let status = formDetails.getIn(["companyAssets", index, "status", "value"]);
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Company Asset Details</h1>
          <Form.Group widths="equal">
            <Form.Select
              label="ID"
              options={COMPANY_ASSETS_OPTIONS}
              type="text"
              name="id"
              value={formDetails.getIn(["companyAssets", index, "id", "value"])}
              placeholder="Select company asset"
              error={{ content: "Please select a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              label="Detail"
              type="text"
              name="detail"
              value={formDetails.getIn([
                "companyAssets",
                index,
                "detail",
                "value",
              ])}
              placeholder="Detail"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Button
              toggle
              name="returnable"
              active={returnable}
              content="Returnable"
              onClick={(e, { name }) => this.handleChange(name, !returnable)}
            />
            <Button
              toggle
              name="status"
              active={status}
              content="Status"
              onClick={(e, { name }) => this.handleChange(name, !status)}
            />
            <DateInput
              fluid
              label="Issue Date"
              name="issueDate"
              value={formDetails.getIn([
                "companyAssets",
                index,
                "issueDate",
                "value",
              ])}
              placeholder="Issue Date"
              iconPosition="left"
              error={{ content: "Please select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Button onClick={this.addAnotherEntry}>Add Entry</Button>
          <h3>List of Company Assets</h3>
          <List celled animated ordered>
            {formDetails.getIn(["companyAssets"]).map((entry, index) => {
              return (
                <List.Item key={`companyAssets_item_${index}`}>
                  {`${entry.getIn(["id", "value"])}      ${entry.getIn([
                    "detail",
                    "value",
                  ])}    ${entry.getIn([
                    "returnable",
                    "value",
                  ])}   ${entry.getIn(["status", "value"])}   ${entry.getIn([
                    "issueDate",
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

export default CompanyAsset;
