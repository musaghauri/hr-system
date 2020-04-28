import React, { Component } from 'react';
import AddRoleContainer from '@redux/Roles/Add';
import { withAuthSync } from '@utils/auth';
import { getPermissions } from '@redux/Roles/Add/actions';

class AddRole extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getPermissions());
    return { isServer };
  }

  render() {
    return <AddRoleContainer {...this.props} />;
  }
}

export default withAuthSync(AddRole);
