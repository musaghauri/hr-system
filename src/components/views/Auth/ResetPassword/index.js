import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import {
  StyledContainer,
  StyledSegment,
  CenteredHeading,
} from '../custom-components';

class ResetPassword extends Component {
  handleChange = (name, value) => {
    this.props.updateValue(['formDetails', name, 'value'], value);
  };

  render() {
    const { handleSubmit, formDetails } = this.props;
    return (
      <StyledContainer>
        <StyledSegment>
          <Form onSubmit={handleSubmit}>
            <CenteredHeading>Reset Password</CenteredHeading>
            <p>Enter new password</p>
            <Form.Input
              fluid
              type="password"
              label="Password"
              name="password"
              value={formDetails.getIn(['password', 'value'])}
              placeholder="Password"
              error={{ content: 'Passwords does not match' }}
              onChange={(e, { name, value }) => this.handleChange(name, value)}
            />
            <Form.Input
              fluid
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={formDetails.getIn(['confirmPassword', 'value'])}
              placeholder="Confirm Password"
              error={{ content: 'Passwords does not match' }}
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
