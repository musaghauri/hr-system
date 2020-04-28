import React, { Component } from 'react';
import RolesListContainer from '@redux/Roles/List';
import { withAuthSync } from '@utils/auth';
import { getRoles } from '@redux/Roles/List/actions';

class RolesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getRoles());
    return { isServer };
  }

  render() {
    return <RolesListContainer {...this.props} />;
  }
}

export default withAuthSync(RolesList);
