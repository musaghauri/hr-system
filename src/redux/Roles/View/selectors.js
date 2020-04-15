import { createSelector } from 'reselect';

/**
 * Direct selector to the View Role state domain
 */
const selectViewRoleDomain = () => state => state.get('viewRole');

const selectRole = () =>
  createSelector(selectViewRoleDomain(), viewRoleState =>
    viewRoleState.get('role')
  );

const selectGetRoleStatus = () =>
  createSelector(selectViewRoleDomain(), viewRoleState =>
    viewRoleState.get('getRoleStatus')
  );

export { selectRole, selectGetRoleStatus };
