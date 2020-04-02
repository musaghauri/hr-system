import React, { Component } from "react";
import { Button, Form, Container, Segment} from "semantic-ui-react";

import styled from 'styled-components';
const StyledContainer = styled(Container)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 100vh !important;
`;
const StyledSegment = styled(Segment)`
  padding: 3em !important;
`;
const CenterHeading = styled.h1`
  text-align: center;
`;
const StyeledA = styled.a`
  display: inline-block;
  margin-bottom: 5px;
`;
class ResetPassword extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(["formDetails", name, "value"], value);
  };
  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <StyledContainer>
      <StyledSegment>
      <Form onSubmit={handleSubmit}>
        <CenterHeading>Reset Password</CenterHeading>
        <p>Enter new password</p>
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
        <Button type="submit">Reset Password</Button>
      </Form>
      </StyledSegment>
      </StyledContainer>
    );
  }
}
export default ResetPassword;
