import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class Intro extends Component {
  handleChange = (e, { name, value }) => {
    const { updateValue } = this.props;
    updateValue(["formDetails", name, "value"], value);
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
    const { formDetails, roles, getRolesStatus } = this.props;
    let isActive = formDetails.getIn(["isActive", "value"]);
    let isVerified = formDetails.getIn(["isVerified", "value"]);
    return (
      <Segment>
        <Form>
          <h1 className="ui centered">Employee Intro</h1>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              type="text"
              label={formDetails.getIn(['name', 'label'])}
              name={formDetails.getIn(['name', 'name'])}
              value={formDetails.getIn([
                "name",
                "value",
              ])}
              placeholder={formDetails.getIn(['name', 'placeholder'])}
              error={
                !formDetails.getIn(['name', 'status'])
                  ? formDetails.getIn(['name', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              type="email"
              label={formDetails.getIn(['email', 'label'])}
              name={formDetails.getIn(['email', 'name'])}
              value={formDetails.getIn([
                "email",
                "value",
              ])}
              placeholder={formDetails.getIn(['email', 'placeholder'])}
              error={
                !formDetails.getIn(['email', 'status'])
                  ? formDetails.getIn(['email', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Select
              fluid
              search
              options={roles.toJS()}
              loading={getRolesStatus.get('loading')}
              label={formDetails.getIn(['role', 'label'])}
              name={formDetails.getIn(['role', 'name'])}
              value={formDetails.getIn([
                "role",
                "value",
              ])}
              placeholder={formDetails.getIn(['role', 'placeholder'])}
              error={
                !formDetails.getIn(['role', 'status'])
                  ? formDetails.getIn(['role', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              type="password"
              label={formDetails.getIn(['password', 'label'])}
              name={formDetails.getIn(['password', 'name'])}
              value={formDetails.getIn([
                "password",
                "value",
              ])}
              placeholder={formDetails.getIn(['password', 'placeholder'])}
              error={
                !formDetails.getIn(['password', 'status'])
                  ? formDetails.getIn(['password', 'errorText'])
                  : false
              }
              onChange={this.handleChange}
            />
            </Form.Group>
          <Form.Group>
            <Button
            toggle
            name={formDetails.getIn(['isActive', 'name'])}
            active={isActive}
            content="isActive"
            onClick={(e, {name})=>this.handleChange(e, {name, value: !isActive})}
            />
            <Button
            toggle
            name={formDetails.getIn(['isVerified', 'name'])}
            active={isVerified}
            content="isVerified"
            onClick={(e, {name})=>this.handleChange(e, {name, value: !isVerified})}
            />
          </Form.Group>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.saveAndContinue}>Save And Continue</Button>
        </Form>
      </Segment>
    );
  }
}

export default Intro;
