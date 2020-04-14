import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => state => state.get('login');

const selectLoginStatus = () =>
  createSelector(selectLoginDomain(), loginState =>
    loginState.get('loginStatus')
  );

const selectGetRolesStatus = () =>
  createSelector(selectLoginDomain(), loginState =>
    loginState.get('getRolesStatus')
  );

const selectRoles = () =>
  createSelector(selectLoginDomain(), loginState => loginState.get('roles'));

const selectFormDetails = () =>
  createSelector(selectLoginDomain(), loginState =>
    loginState.get('formDetails')
  );

export {
  selectLoginStatus,
  selectGetRolesStatus,
  selectRoles,
  selectFormDetails,
};
