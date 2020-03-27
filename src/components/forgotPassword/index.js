import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailValid: true,
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
        let emailValid = this.state.emailValid;
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                break;
            default:
                break;
        }
        this.setState({ emailValid }, this.validateForm);
    }

    validateForm = () => {
        this.setState({ formValid: this.state.emailValid });
    }

    render() {
        const { emailValid, formValid } = this.state
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        name="email"
                        id='form-input-control-error-email'
                        label='Email' placeholder='Email'
                        error={!emailValid && {
                            content: 'Please enter a valid email address',
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
export default ForgotPassword