import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Employee state domain
 */
const selectEditEmployeeDomain = () => state => state.get('editEmployee');

const selectFormDetails = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
  editEmployeeState.get("formDetails")
  );

  const selectRoles = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('roles')
  );

const selectGetRolesStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('getRolesStatus')
  );


const selectCountries = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('getCountriesStatus')
  );
  
const selectStates = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('states')
  );

const selectGetStatesStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('getStatesStatus')
  );

const selectCities = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('cities')
  );

const selectGetCitiesStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('getCitiesStatus')
  );

const selectDepartments = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('departments')
  );

const selectGetDepartmentsStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('getDepartmentsStatus')
  );

  const selectAssets = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
    editEmployeeState.get('assets')
  );

const selectGetAssetsStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
   editEmployeeState.get('getAssetsStatus')
  );

const selectEditEmployeeStatus = () =>
  createSelector(selectEditEmployeeDomain(), editEmployeeState =>
  editEmployeeState.get('editEmployeeStatus')
  );

export { 
  selectRoles,
  selectGetRolesStatus,
  selectFormDetails,
  selectCountries,
  selectGetCountriesStatus,
  selectStates,
  selectGetStatesStatus,
  selectCities,
  selectGetCitiesStatus,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectAssets,
  selectGetAssetsStatus,
  selectEditEmployeeStatus

 };