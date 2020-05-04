import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Employee state domain
 */
const selectAddEmployeeDomain = () => state => state.get('addEmployee');

const selectFormDetails = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('formDetails')
  );

const selectRoles = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('roles')
  );

const selectGetRolesStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('getRolesStatus')
  );

const selectCountries = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('countries')
  );

const selectGetCountriesStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('getCountriesStatus')
  );

const selectStates = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('states')
  );

const selectGetStatesStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('getStatesStatus')
  );

const selectCities = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('cities')
  );

const selectGetCitiesStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('getCitiesStatus')
  );

const selectDepartments = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('departments')
  );

const selectGetDepartmentsStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('getDepartmentsStatus')
  );

const selectAssets = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('assets')
  );

const selectGetAssetsStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('getAssetsStatus')
  );

const selectAddEmployeeStatus = () =>
  createSelector(selectAddEmployeeDomain(), addEmployeeState =>
    addEmployeeState.get('addEmployeeStatus')
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
  selectAddEmployeeStatus,
};
