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

const selectGetEmployeesStatus = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('getEmployeesStatus')
  );
  
export { 
  selectAddProjectStatus, 
  selectFormDetails, 
  selectEmployees, 
  selectGetEmployeesStatus
};
