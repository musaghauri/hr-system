import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Departmet state domain
 */
const selectAddDepartmetDomain = () => state => state.get('addProject');

const selectAddProjectStatus = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('addProjectStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('formDetails')
  );
  
const selectEmployees = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('employees')
  );

export { selectAddProjectStatus, selectFormDetails, selectEmployees };
