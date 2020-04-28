import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Permission state domain
 */
const selectEditPermissionDomain = () => state => state.get('editPermission');

const selectGetPermissionStatus = () =>
  createSelector(selectEditPermissionDomain(), editPermissionState =>
    editPermissionState.get('getPermissionStatus')
  );

const selectEditPermissionStatus = () =>
  createSelector(selectEditPermissionDomain(), editPermissionState =>
    editPermissionState.get('editPermissionStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditPermissionDomain(), editPermissionState =>
    editPermissionState.get('formDetails')
  );

export {
  selectGetPermissionStatus,
  selectEditPermissionStatus,
  selectFormDetails,
};
