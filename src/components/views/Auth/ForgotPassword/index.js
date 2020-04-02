import React, { Component } from "react";
import { Button, Form, Container, Segment} from "semantic-ui-react";
import Link from "next/link";
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
  cursor: pointer;
`;
class ForgotPassword extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(["formDetails", name, "value"], value);
  };
  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <StyledContainer>
      <StyledSegment>
      <Form onSubmit={handleSubmit}>
        <CenterHeading>Forgot Password</CenterHeading>
          <Form.Input
            fluid
            type="email"
            name="email"
            value={formDetails.getIn(["email", "value"])}
            label="Email"
            placeholder="Email"
            error={{ content: "Please enter a valid email address" }}
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        <Button type="submit">Submit</Button>
        <p>
          Back to{" "}
          <Link href="/login">
            <StyeledA>Login</StyeledA>
          </Link>
        </p>
      </Form>
      </StyledSegment>
      </StyledContainer>
    );
  }
}
export default ForgotPassword;
