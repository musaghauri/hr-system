import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class ResetPassword extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(["formDetails", name], value);
  };
  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <h1>Reset Forgot</h1>
        <p>Enter new password</p>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="password"
            label="Password"
            name="password"
            value={formDetails.getIn(["password", "value"])}
            placeholder="Password"
            error={{ content: "Passwords does not match" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
          <Form.Input
            fluid
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={formDetails.getIn(["confirmPassword", "value"])}
            placeholder="Confirm Password"
            error={{ content: "Passwords does not match" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
export default ResetPassword;
