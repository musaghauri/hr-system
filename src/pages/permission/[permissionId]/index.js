import React, { Component } from 'react';
import ViewPermissionContainer from '@redux/Permissions/View';
import { withAuthSync } from '@utils/auth';
import { getPermission } from '@redux/Permissions/View/actions';

class ViewPermission extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { permissionId } = query;
    store.dispatch(getPermission(permissionId));
    return { isServer };
  }

  render() {
    return <ViewPermissionContainer {...this.props} />;
  }
}

export default withAuthSync(ViewPermission);
