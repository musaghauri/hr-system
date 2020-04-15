import React, { Component } from 'react';
import PermissionsList from '@components/views/Permissions/List';
import Router from 'next/router';
import { Icon, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deletePermission } from './actions';
import {
  selectHeadings,
  selectPermissions,
  selectGetPermissionsStatus,
  selectDeletePermissionStatus,
} from './selectors';

class PermissionsListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deletePermission = (id, index) => {
    const { onDeletePermission } = this.props;
    onDeletePermission(id, index);
  };

  makeRows = permissions => {
    const { headings } = this.props;
    return permissions.toArray().map((permission, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/permission/[permissionId]/edit',
                `/permission/${permission.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/permission/[permissionId]',
                `/permission/${permission.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deletePermission(permission.get('_id'), eIndex),
          };
        }
        return {
          value: permission.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, permissions, deletePermissionStatus } = this.props;
    const rows = this.makeRows(permissions.get('items'));
    if (deletePermissionStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <PermissionsList headings={headings} permissions={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  permissions: selectPermissions(),
  getPermissionsStatus: selectGetPermissionsStatus(),
  deletePermissionStatus: selectDeletePermissionStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeletePermission: bindActionCreators(deletePermission, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PermissionsListContainer);
