import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Router from 'next/router';

const options = [
    { key: 'admin', text: 'Admin', value: 'admin' },
    { key: 'employee', text: 'Employee', value: 'employee' },
]

class Login extends Component {
    handleforgotPassword = () => {
        Router.push('/forgot-password')
    }
    render() {
        const { handleSubmit, onSuccess } = this.props
        return (
            <Form onSubmit={(e) => onSuccess('user_email')}>
                <Form.Group widths="equal" >
                    <Form.Input
                        fluid
                        label='Username'
                        name="email"
                        placeholder='Username or email'
                        error={{ content: 'Please enter a valid username' }}
                    />
                    <Form.Input
                        fluid
                        label='Password'
                        name="password"
                        placeholder='Password'
                        error={{ content: 'Password must be 6 characters or more' }}
                    />
                    <Form.Select
                        fluid
                        label='Role' options={options} placeholder='Role'
                        name='role'
                        error={{ content: 'Please select a role' }}
                    />
                </Form.Group>
                <p onClick={this.handleforgotPassword}>Forgot password?</p>
                <Button fluid type='submit'>Submit</Button>
            </Form>
        );
    }
}
export default Login