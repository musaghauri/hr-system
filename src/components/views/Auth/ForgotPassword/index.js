import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class ForgotPassword extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        name="email"
                        label='Email' placeholder='Email'
                        error={{ content: 'Please enter a valid email address' }}
                    />
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}
export default ForgotPassword