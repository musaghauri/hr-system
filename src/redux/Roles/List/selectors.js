import { createSelector } from 'reselect';

/**
 * Direct selector to the Roles List state domain
 */
const selectRolesListDomain = () => state => state.get('rolesList');

const selectHeadings = () =>
  createSelector(selectRolesListDomain(), rolesListState =>
    rolesListState.get('headings')
  );
const selectRoles = () =>
  createSelector(selectRolesListDomain(), rolesListState =>
    rolesListState.get('roles')
  );

const selectGetRolesStatus = () =>
  createSelector(selectRolesListDomain(), rolesListState =>
    rolesListState.get('getRolesStatus')
  );

const selectDeleteRoleStatus = () =>
  createSelector(selectRolesListDomain(), rolesListState =>
    rolesListState.get('deleteRoleStatus')
  );
export {
  selectHeadings,
  selectRoles,
  selectGetRolesStatus,
  selectDeleteRoleStatus,
};
