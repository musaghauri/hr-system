import React, { Component } from 'react';
import EditRoleContainer from '@redux/Roles/Edit';
import { withAuthSync } from '@utils/auth';
import { getRole, getPermissions } from '@redux/Roles/Edit/actions';

class EditRole extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { roleId } = query;
    store.dispatch(getRole(roleId));
    store.dispatch(getPermissions());
    return { isServer, query };
  }

  render() {
    return <EditRoleContainer {...this.props} />;
  }
}

export default withAuthSync(EditRole);
