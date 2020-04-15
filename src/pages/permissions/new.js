import React, { Component } from 'react';
import AddPermissionContainer from '@redux/Permissions/Add';
import { withAuthSync } from '@utils/auth';

class AddPermission extends Component {
  render() {
    return <AddPermissionContainer />;
  }
}

export default withAuthSync(AddPermission);
