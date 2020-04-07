import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Link from 'next/link';
import { ROLE_OPTIONS } from '@config';
import {
  StyledContainer,
  StyledSegment,
  StyledAnchor,
  CenteredHeading,
} from '../custom-components';

class Login extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(['formDetails', name, 'value'], value);
  };

  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <StyledContainer>
        <StyledSegment>
          <Form onSubmit={handleSubmit} stacked="true">
            <CenteredHeading>Login</CenteredHeading>
            <Form.Input
              fluid
              type="email"
              label="Username"
              name="email"
              value={formDetails.getIn(['email', 'value'])}
              placeholder="Username or email"
              error={{ content: 'Please enter a valid username' }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              fluid
              type="password"
              label="Password"
              name="password"
              value={formDetails.getIn(['password', 'value'])}
              placeholder="Password"
              error={{ content: 'Password must be 6 characters or more' }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Select
              fluid
              label="Role"
              options={ROLE_OPTIONS}
              placeholder="Role"
              name="role"
              value={formDetails.getIn(['role', 'value'])}
              error={{ content: 'Please select a role' }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Link href="/forgot-password">
              <StyledAnchor>Forgot password?</StyledAnchor>
            </Link>
            <Button fluid type="submit">
              Login
            </Button>
          </Form>
        </StyledSegment>
      </StyledContainer>
    );
  }
}
export default Login;
