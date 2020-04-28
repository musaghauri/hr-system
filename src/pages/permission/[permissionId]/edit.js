import React, { Component } from 'react';
import EditPermissionContainer from '@redux/Permissions/Edit';
import { withAuthSync } from '@utils/auth';
import { getPermission } from '@redux/Permissions/Edit/actions';

class EditPermission extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { permissionId } = query;
    store.dispatch(getPermission(permissionId));
    return { isServer, query };
  }

  render() {
    return <EditPermissionContainer {...this.props} />;
  }
}

export default withAuthSync(EditPermission);
