import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import {
  GENDER_OPTIONS,
  CITY_OPTIONS,
  COUNTRY_OPTIONS,
  MARITAL_STATUS_OPTIONS,
  BLOOD_GROUP_OPTIONS
} from "@config";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateOfBirth: ""
    };
  }
  handleChange = (name, value) => {
    console.log(name, value);
    // let tempFormDetails = Object.assign(
    //   {},
    //   this.props.formDetails.get("personalInformation")
    // );
    // console.log(tempFormDetails);
    // tempFormDetails.setIn([name, "value"], value);
    this.props.updateFormDetails("personalInformation", name, value);
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
          <h1 className="ui centered">Enter Personal Details</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              type="text"
              name="name"
              value={formDetails.getIn([
                "personalInformation",
                "name",
                "value"
              ])}
              placeholder="Name"
              error={{ content: "Please enter a name" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              fluid
              label="Company Email"
              type="email"
              name="companyEmail"
              value={formDetails.getIn([
                "personalInformation",
                "companyEmail",
                "value"
              ])}
              placeholder="Company Email"
              error={{ content: "Please enter a valid email" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              fluid
              label="Father Name"
              type="text"
              name="fatherName"
              value={formDetails.getIn([
                "personalInformation",
                "fatherName",
                "value"
              ])}
              placeholder="Father Name"
              error={{ content: "Please enter a name" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <DateInput
              fluid
              label="Date of Birth"
              name="dateOfBirth"
              placeholder="Date of Birth"
              iconPosition="left"
              value={formDetails.getIn([
                "personalInformation",
                "dateOfBirth",
                "value"
              ])}
              error={{ content: "Please enter select a date" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              fluid
              label="Gender"
              options={GENDER_OPTIONS}
              type="text"
              name="gender"
              value={formDetails.getIn([
                "personalInformation",
                "gender",
                "value"
              ])}
              placeholder="Select Gender"
              error={{ content: "Please select a gender" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />

            <Form.Select
              fluid
              label="Nationality"
              options={COUNTRY_OPTIONS}
              type="text"
              name="nationality"
              value={formDetails.getIn([
                "personalInformation",
                "nationality",
                "value"
              ])}
              placeholder="Select a value"
              error={{ content: "Please select a country" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="City"
              options={CITY_OPTIONS}
              type="text"
              name="city"
              value={formDetails.getIn([
                "personalInformation",
                "city",
                "value"
              ])}
              placeholder="Select City"
              error={{ content: "Please select a city" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              fluid
              label="Country"
              options={COUNTRY_OPTIONS}
              type="text"
              name="country"
              value={formDetails.getIn([
                "personalInformation",
                "country",
                "value"
              ])}
              placeholder="Select Country"
              error={{ content: "Please select a country" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />

            <Form.Input
              fluid
              label="Religion"
              type="text"
              name="religion"
              value={formDetails.getIn([
                "personalInformation",
                "religion",
                "value"
              ])}
              placeholder="Religion"
              error={{ content: "Please enter a religion" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Marital Status"
              options={MARITAL_STATUS_OPTIONS}
              type="text"
              name="maritalStatus"
              value={formDetails.getIn([
                "personalInformation",
                "maritalStatus",
                "value"
              ])}
              placeholder="Select marital status"
              error={{ content: "Please select a status" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />

            <Form.Select
              fluid
              label="Blood Group"
              options={BLOOD_GROUP_OPTIONS}
              type="text"
              name="bloodGroup"
              value={formDetails.getIn([
                "personalInformation",
                "bloodGroup",
                "value"
              ])}
              placeholder="Select a group"
              error={{ content: "Please select a group" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              fluid
              label="Disablility"
              type="text"
              name="disablility"
              value={formDetails.getIn([
                "personalInformation",
                "disablility",
                "value"
              ])}
              placeholder="Disablility"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="CNIC"
              type="text"
              name="cnic"
              value={formDetails.getIn([
                "personalInformation",
                "cnic",
                "value"
              ])}
              placeholder="CNIC"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              fluid
              label="NTN"
              type="text"
              name="ntn"
              value={formDetails.getIn(["personalInformation", "ntn", "value"])}
              placeholder="NTN"
              error={{ content: "Please enter a value" }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              fluid
              label="Domicile"
              options={CITY_OPTIONS}
              type="text"
              name="domicile"
              value={formDetails.getIn([
                "personalInformation",
                "domicile",
                "value"
              ])}
              placeholder="Select a city"
              error={{ content: "Please select a city" }}
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

export default Personal;
