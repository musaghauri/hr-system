import React, { Component } from 'react';
import RolesList from '@components/views/Roles/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteRole } from './actions';
import {
  selectHeadings,
  selectRoles,
  selectGetRolesStatus,
  selectDeleteRoleStatus,
} from './selectors';

class RolesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteRole = (id, index) => {
    const { onDeleteRole } = this.props;
    onDeleteRole(id, index);
  };

  makeRows = roles => {
    const { headings } = this.props;
    return roles.toArray().map((role, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/role/[roleId]/edit',
                `/role/${role.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace('/role/[roleId]', `/role/${role.get('_id')}`),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.deleteRole(role.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'permissions') {
          return {
            value: role
              .get(heading.get('name'))
              .toArray()
              .map(permission => (
                <Label color="green" horizontal>
                  {permission.get('name')}
                </Label>
              )),
            isFunctional: false,
          };
        }
        return {
          value: role.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, roles, deleteRoleStatus } = this.props;
    const rows = this.makeRows(roles.get('items'));
    if (deleteRoleStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <RolesList headings={headings} roles={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  roles: selectRoles(),
  getRolesStatus: selectGetRolesStatus(),
  deleteRoleStatus: selectDeleteRoleStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteRole: bindActionCreators(deleteRole, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RolesListContainer);
