import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Link from 'next/link';
import {
  StyledContainer,
  StyledSegment,
  StyledAnchor,
  CenteredHeading,
} from '../custom-components';

class ForgotPassword extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(['formDetails', name, 'value'], value);
  };

  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <StyledContainer>
        <StyledSegment>
          <Form onSubmit={handleSubmit}>
            <CenteredHeading>Forgot Password</CenteredHeading>
            <Form.Input
              fluid
              type="email"
              name="email"
              value={formDetails.getIn(['email', 'value'])}
              label="Email"
              placeholder="Email"
              error={{ content: 'Please enter a valid email address' }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Button type="submit">Submit</Button>
            <p>
              Back to{' '}
              <Link href="/login">
                <StyledAnchor>Login</StyledAnchor>
              </Link>
            </p>
          </Form>
        </StyledSegment>
      </StyledContainer>
    );
  }
}
export default ForgotPassword;
