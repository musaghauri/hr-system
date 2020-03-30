import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class ResetPassword extends Component {
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label='Password'
            name='password'
            placeholder='Password'
            error={{ content: 'Passwords does not match' }}
          />
          <Form.Input
            fluid
            label='Confirm Password'
            name='confirmPassword'
            placeholder='Confirm Password'
            error={{ content: 'Passwords does not match' }}

          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    );
  }
}
export default ResetPassword