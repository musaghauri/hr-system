import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Role state domain
 */
const selectEditRoleDomain = () => state => state.get('editRole');

const selectGetRoleStatus = () =>
  createSelector(selectEditRoleDomain(), editRoleState =>
    editRoleState.get('getRoleStatus')
  );

const selectEditRoleStatus = () =>
  createSelector(selectEditRoleDomain(), editRoleState =>
    editRoleState.get('editRoleStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditRoleDomain(), editRoleState =>
    editRoleState.get('formDetails')
  );
const selectPermissions = () =>
  createSelector(selectEditRoleDomain(), editRoleState =>
    editRoleState.get('permissions')
  );

const selectGetPermissionsStatus = () =>
  createSelector(selectEditRoleDomain(), editRoleState =>
    editRoleState.get('getPermissionsStatus')
  );
export {
  selectGetRoleStatus,
  selectEditRoleStatus,
  selectFormDetails,
  selectPermissions,
  selectGetPermissionsStatus,
};
