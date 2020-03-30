import React, { Component } from 'react';
import ResetPassword from 'components/views/Auth/ResetPassword';
import Router from 'next/router';
import cookie from 'react-cookies';

class ResetPasswordContainer extends Component {

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
        return <ResetPassword />
    }
}

export default ResetPasswordContainer;