import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import Link from "next/link";

class ForgotPassword extends Component {
  handleChange = (name, value) => {
    this.props.updateFormDetails(name, value);
  };
  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <h1>Password Forgot</h1>
        <p>
          To reset your password, enter the email address you used to sign into
          HRMS
        </p>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            type="email"
            name="email"
            value={formDetails.get("email").get("value") || ""}
            label="Email"
            placeholder="Email"
            error={{ content: "Please enter a valid email address" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <p>
          Back to{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </p>
      </Form>
    );
  }
}
export default ForgotPassword;
