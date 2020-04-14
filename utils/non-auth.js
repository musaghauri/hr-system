/* eslint-disable react/static-property-placement */
import React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';

export const auth = ({ ctx }) => {
  const { hrms } = nextCookie(ctx);
  /*
   * This happens on server only, ctx.req is available means it's being
   * rendered on server. If we are on server and token is not available,
   * means user is not logged in.
   */
  if (ctx.req && hrms) {
    ctx.res.writeHead(302, { Location: '/dashboard' });
    ctx.res.end();
    return;
  }

  // We already checked for server. This should only happen on client.
  if (hrms) {
    Router.push('/dashboard');
  }

  return hrms;
};

// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export const withNonAuthSync = WrappedComponent =>
  class extends React.Component {
    static displayName = `withNonAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
