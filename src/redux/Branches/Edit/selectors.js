import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Branch state domain
 */
const selectEditBranchDomain = () => state => state.get('editBranch');

const selectGetBranchStatus = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
    editBranchState.get('getBranchStatus')
  );

const selectEditBranchStatus = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
    editBranchState.get('editBranchStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
    editBranchState.get('formDetails')
  );
  const selectDepartments = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('departments')
  );

const selectGetDepartmentsStatus = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('getDepartmentsStatus')
  );
const selectCountries = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('getCountriesStatus')
  );
const selectStates = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('states')
  );

const selectGetStatesStatus = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('getStatesStatus')
  );

const selectCities = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('cities')
  );

const selectGetCitiesStatus = () =>
  createSelector(selectEditBranchDomain(), editBranchState =>
  editBranchState.get('getCitiesStatus')
  );

export {
  selectGetBranchStatus,
  selectEditBranchStatus,
  selectFormDetails,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
  selectCities,
  selectGetCitiesStatus 
};