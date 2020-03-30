import React, { Component } from 'react';
import ForgotPassword from 'components/views/Auth/ForgotPassword';
import Router from 'next/router';
import cookie from 'react-cookies';

class ForgotPasswordContainer extends Component {

    static async getInitialProps({ query }) {
        return { error: query.error };
    }

    componentWillMount() {
        console.log(cookie.load('userId'))
        if (cookie.load('userId')) {
            Router.push('/dashboard')
        }
    }

    render() {
        return <ForgotPassword />
    }
}

export default ForgotPasswordContainer;