import React, { Component } from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'

class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      confirmPassword: '',
      passwordValid: true,
      confirmPasswordValid: true,
      formValid: false,
    }
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }
  validateField = (fieldName, value) => {
    let { passwordValid, password, confirmPassword } = this.state;
    switch (fieldName) {
      case 'password':
      case 'confirmPassword':
        passwordValid = value === confirmPassword && value === password;
        break;
      default:
        break;
    }
    this.setState({ passwordValid }, this.validateForm);
  }

  validateForm = () => {
    this.setState({ formValid: this.state.passwordValid && this.state.password.length > 0 });
  }
  handleSubmit = () => {
  }
  render() {
    const { passwordValid, confirmPasswordValid, formValid } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id='form-input-control-error-password'
            label='Password'
            name='password'
            placeholder='Password'
            error={!passwordValid && {
              content: 'Passwords does not match',
            }}
            onChange={(event) => this.handleUserInput(event)}
            onBlur={(event) => this.handleUserInput(event)}
          />
          <Form.Input
            fluid
            id='form-input-control-error-confirmPassword'
            label='Confirm Password'
            name='confirmPassword'
            placeholder='Confirm Password'
            error={!passwordValid && {
              content: 'Passwords does not match',
            }}
            onChange={(event) => this.handleUserInput(event)}
            onBlur={(event) => this.handleUserInput(event)}
          />
        </Form.Group>
        <Button type='submit' disabled={!formValid}>Submit</Button>
      </Form>
    );
  }
}
export default ResetPassword