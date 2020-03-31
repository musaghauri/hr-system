import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import Link from "next/link";
import { ROLE_OPTIONS } from "@config";

class Login extends Component {
  handleChange = (name, value) => {
    this.props.updateFormDetails(name, value);
  };
  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="email"
            label="Username"
            name="email"
            value={formDetails.get("email").get("value") || ""}
            placeholder="Username or email"
            error={{ content: "Please enter a valid username" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
          <Form.Input
            fluid
            type="password"
            label="Password"
            name="password"
            value={formDetails.get("password").get("value") || ""}
            placeholder="Password"
            error={{ content: "Password must be 6 characters or more" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
          <Form.Select
            fluid
            label="Role"
            options={ROLE_OPTIONS}
            placeholder="Role"
            name="role"
            value={formDetails.get("role").get("value") || ""}
            error={{ content: "Please select a role" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        </Form.Group>
        <Link href="/forgot-password">
          <a>Forgot password?</a>
        </Link>
        <Button fluid type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default Login;
