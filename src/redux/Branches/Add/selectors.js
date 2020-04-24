import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Branch state domain
 */
const selectAddBranchDomain = () => state => state.get('addBranch');

const selectAddBranchStatus = () =>
  createSelector(selectAddBranchDomain(), addBranchState =>
    addBranchState.get('addBranchStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddBranchDomain(), addBranchState =>
    addBranchState.get('formDetails')
  );
  const selectDepartments = () =>
  createSelector(selectAddBranchDomain(), addBranchState =>
  addBranchState.get('departments')
  );

const selectGetDepartmentsStatus = () =>
  createSelector(selectAddBranchDomain(), addBranchState =>
  addBranchState.get('getDepartmentsStatus')
  );
  const selectCities = () =>
  createSelector(selectAddBranchDomain(), addBranchState =>
  addBranchState.get('cities')
  );

const selectGetCitiesStatus = () =>
  createSelector(selectAddBranchDomain(), addBranchState =>
  addBranchState.get('getCitiesStatus')
  );


export {
  selectAddBranchStatus, 
  selectFormDetails, 
  selectDepartments, 
  selectGetDepartmentsStatus,
  selectCities,
  selectGetCitiesStatus 
};
