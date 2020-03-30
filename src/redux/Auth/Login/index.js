import React, { Component } from 'react';
import Login from 'components/views/Auth/Login';
import Router from 'next/router';
import cookie from 'react-cookies';

class LoginContainer extends Component {

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
        const { onSuccess } = this.props;
        return <Login onSuccess={onSuccess} />
    }
}

export default LoginContainer;