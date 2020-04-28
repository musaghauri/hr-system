import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Permission state domain
 */
const selectAddPermissionDomain = () => state => state.get('addPermission');

const selectAddPermissionStatus = () =>
  createSelector(selectAddPermissionDomain(), addPermissionState =>
    addPermissionState.get('addPermissionStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddPermissionDomain(), addPermissionState =>
    addPermissionState.get('formDetails')
  );

export { selectAddPermissionStatus, selectFormDetails };
