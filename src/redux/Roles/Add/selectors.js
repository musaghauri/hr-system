import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Role state domain
 */
const selectAddRoleDomain = () => state => state.get('addRole');

const selectAddRoleStatus = () =>
  createSelector(selectAddRoleDomain(), addRoleState =>
    addRoleState.get('addRoleStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddRoleDomain(), addRoleState =>
    addRoleState.get('formDetails')
  );
const selectPermissions = () =>
  createSelector(selectAddRoleDomain(), addRoleState =>
    addRoleState.get('permissions')
  );

const selectGetPermissionsStatus = () =>
  createSelector(selectAddRoleDomain(), addRoleState =>
    addRoleState.get('getPermissionsStatus')
  );
export {
  selectAddRoleStatus,
  selectFormDetails,
  selectPermissions,
  selectGetPermissionsStatus,
};
