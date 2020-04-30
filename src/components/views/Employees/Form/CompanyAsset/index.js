import React, { Component } from "react";
import { Form, Button, Segment, List } from "semantic-ui-react";
// import { COMPANY_ASSETS_OPTIONS } from "@config/constants/companyAsset";
import { DateInput } from "semantic-ui-calendar-react";
import { ASSET_INITIAL_STATE } from "@config/constants/asset";

class CompanyAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  handleChange = (name, value) => {
    let { index } = this.state;
    const { updateValue } = this.props;
    updateValue(
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
      let value = [ ...contacts, ASSET_INITIAL_STATE ];
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
    const { formDetails, assets, getAssetsStatus } = this.props;
    let { index } = this.state;
    let returnable = formDetails.getIn([
      "companyAssets",
      index,
      "returnable",
      "value",
    ]);
    let status = formDetails.getIn(["companyAssets", index, "status", "value"]);
    console.log('companyAssets', formDetails.get('companyAssets').toJS())
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Enter Company Asset Details</h1>
          <Form.Group widths="equal">
            <Form.Select
              type="text"
              options={assets.toJS()}
              loading={getAssetsStatus.get('loading')}
              label={formDetails.getIn(['companyAssets', index, 'id', 'label'])}
              name={formDetails.getIn(['companyAssets', index, 'id', 'name'])}
              value={formDetails.getIn([
                "companyAssets",
                index,
                "id",
                "value",
              ])}
              placeholder={formDetails.getIn(['companyAssets', index, 'id', 'placeholder'])}
              error={
                !formDetails.getIn(['companyAssets', index, 'id', 'status'])
                  ? formDetails.getIn(['companyAssets', index, 'id', 'errorText'])
                  : false
              }
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              type="text"
              label={formDetails.getIn(['companyAssets', index, 'detail', 'label'])}
              name={formDetails.getIn(['companyAssets', index, 'detail', 'name'])}
              value={formDetails.getIn([
                "companyAssets",
                index,
                "detail",
                "value",
              ])}
              placeholder={formDetails.getIn(['companyAssets', index, 'detail', 'placeholder'])}
              error={
                !formDetails.getIn(['companyAssets', index, 'detail', 'status'])
                  ? formDetails.getIn(['companyAssets', index, 'detail', 'errorText'])
                  : false
              }
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
              iconPosition="left"
              label={formDetails.getIn(['companyAssets', index, 'issueDate', 'label'])}
              name={formDetails.getIn(['companyAssets', index, 'issueDate', 'name'])}
              value={formDetails.getIn([
                "companyAssets",
                index,
                "issueDate",
                "value",
              ])}
              placeholder={formDetails.getIn(['companyAssets', index, 'issueDate', 'placeholder'])}
              error={
                !formDetails.getIn(['companyAssets', index, 'issueDate', 'status'])
                  ? formDetails.getIn(['companyAssets', index, 'issueDate', 'errorText'])
                  : false
              }
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
