import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

const options = [
    { key: 'admin', text: 'Admin', value: 'admin' },
    { key: 'employee', text: 'Employee', value: 'employee' },
]

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            role: '',
            usernameValid: true,
            passwordValid: true,
            roleValid: true,
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
        let { usernameValid, passwordValid } = this.state;
        switch (fieldName) {
            case 'email':
                usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            case 'password':
                passwordValid = value.length >= 6;
                break;
            default:
                break;
        }
        console.log(passwordValid)
        this.setState({ usernameValid, passwordValid }, this.validateForm);
    }

    validateForm = () => {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid && this.state.password.length > 0 && this.state.role.length > 0 });
    }

    render() {
        const { usernameValid, passwordValid, roleValid, formValid } = this.state
        const { handleSubmit, handleforgotPassword } = this.props
        return (
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group widths="equal" >
                    <Form.Input
                        fluid
                        id='form-input-control-error-email'
                        label='Username'
                        name="email"
                        placeholder='Username or email'
                        error={!usernameValid && {
                            content: 'Please enter a valid username',
                        }}
                        onChange={(event) => this.handleUserInput(event)}
                        onBlur={(event) => this.handleUserInput(event)}
                        required
                    />
                    <Form.Input
                        fluid
                        id='form-input-control-error-password'
                        label='Password'
                        name="password"
                        placeholder='Password'
                        error={!passwordValid && {
                            content: 'Password must be 6 characters or more',
                        }}
                        onChange={(event) => this.handleUserInput(event)}
                        onBlur={(event) => this.handleUserInput(event)}
                        required
                    />
                    <Form.Select
                        fluid
                        id='form-input-control-error-role'
                        label='Role' options={options} placeholder='Role'
                        name='role'
                        error={!roleValid && {
                            content: 'Please select a role',
                        }}
                        onChange={(event, { name, value }) => {
                            this.setState({ roleValid: true, role: value }, this.validateForm())
                        }}
                        onBlur={(event, { name, value }) => {
                            this.setState({ roleValid: true, role: value }, this.validateForm())
                        }}
                        required
                    />
                </Form.Group>
                <p onClick={() => handleforgotPassword()}>Forgot password?</p>
                <Button fluid type='submit' disabled={!formValid} >Submit</Button>
            </Form>
        );
    }
}
export default Login