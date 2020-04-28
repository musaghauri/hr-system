import { createSelector } from 'reselect';

/**
 * Direct selector to the Permissions List state domain
 */
const selectPermissionsListDomain = () => state => state.get('permissionsList');

const selectHeadings = () =>
  createSelector(selectPermissionsListDomain(), permissionsListState =>
    permissionsListState.get('headings')
  );
const selectPermissions = () =>
  createSelector(selectPermissionsListDomain(), permissionsListState =>
    permissionsListState.get('permissions')
  );

const selectGetPermissionsStatus = () =>
  createSelector(selectPermissionsListDomain(), permissionsListState =>
    permissionsListState.get('getPermissionsStatus')
  );

const selectDeletePermissionStatus = () =>
  createSelector(selectPermissionsListDomain(), permissionsListState =>
    permissionsListState.get('deletePermissionStatus')
  );
export {
  selectHeadings,
  selectPermissions,
  selectGetPermissionsStatus,
  selectDeletePermissionStatus,
};
