import { createSelector } from 'reselect';

/**
 * Direct selector to the View Permission state domain
 */
const selectViewPermissionDomain = () => state => state.get('viewPermission');

const selectPermission = () =>
  createSelector(selectViewPermissionDomain(), viewPermissionState =>
    viewPermissionState.get('permission')
  );

const selectGetPermissionStatus = () =>
  createSelector(selectViewPermissionDomain(), viewPermissionState =>
    viewPermissionState.get('getPermissionStatus')
  );

export { selectPermission, selectGetPermissionStatus };
