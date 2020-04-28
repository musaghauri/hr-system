import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Departmet state domain
 */
const selectAddDepartmetDomain = () => state => state.get('addDepartment');

const selectAddDepartmentStatus = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('addDepartmentStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('formDetails')
  );

export { selectAddDepartmentStatus, selectFormDetails };
