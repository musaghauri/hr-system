import React, { Component } from 'react';
import PermissionsListContainer from '@redux/Permissions/List';
import { withAuthSync } from '@utils/auth';
import { getPermissions } from '@redux/Permissions/List/actions';

class PermissionsList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getPermissions());
    return { isServer };
  }

  render() {
    return <PermissionsListContainer {...this.props} />;
  }
}

export default withAuthSync(PermissionsList);
