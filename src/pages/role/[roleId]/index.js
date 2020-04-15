import React, { Component } from 'react';
import ViewRoleContainer from '@redux/Roles/View';
import { withAuthSync } from '@utils/auth';
import { getRole } from '@redux/Roles/View/actions';

class ViewRole extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { roleId } = query;
    store.dispatch(getRole(roleId));
    return { isServer };
  }

  render() {
    return <ViewRoleContainer {...this.props} />;
  }
}

export default withAuthSync(ViewRole);
