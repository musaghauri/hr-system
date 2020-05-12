import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ANOTHER_ENTRY,
  GET_ROLES,
  GET_ROLES_SUCCESS,
  GET_ROLES_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  GET_DEPARTMENTS,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAIL,
  GET_ASSETS,
  GET_ASSETS_SUCCESS,
  GET_ASSETS_FAIL,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAIL,
  DELETE_ENTRY,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name,
    value,
  };
}

export function addAnotherEntry(name, value) {
  return {
    type: ADD_ANOTHER_ENTRY,
    name,
    value,
  };
}

export function getRoles() {
  return {
    type: GET_ROLES,
  };
}

export function getRolesSuccess(roles) {
  return {
    type: GET_ROLES_SUCCESS,
    roles,
  };
}

export function getRolesFail(error) {
  return {
    type: GET_ROLES_FAIL,
    error,
  };
}

export function getCountries() {
  return {
    type: GET_COUNTRIES,
  };
}

export function getCountriesSuccess(countries) {
  return {
    type: GET_COUNTRIES_SUCCESS,
    countries,
  };
}

export function getCountriesFail(error) {
  return {
    type: GET_COUNTRIES_FAIL,
    error,
  };
}

export function getStates(countryId) {
  return {
    type: GET_STATES,
    countryId,
  };
}

export function getStatesSuccess(states) {
  return {
    type: GET_STATES_SUCCESS,
    states,
  };
}

export function getStatesFail(error) {
  return {
    type: GET_STATES_FAIL,
    error,
  };
}

export function getCities(stateId) {
  return {
    type: GET_CITIES,
    stateId,
  };
}

export function getCitiesSuccess(cities) {
  return {
    type: GET_CITIES_SUCCESS,
    cities,
  };
}

export function getCitiesFail(error) {
  return {
    type: GET_CITIES_FAIL,
    error,
  };
}

export function getDepartments() {
  return {
    type: GET_DEPARTMENTS,
  };
}

export function getDepartmentsSuccess(departments) {
  return {
    type: GET_DEPARTMENTS_SUCCESS,
    departments,
  };
}

export function getDepartmentsFail(error) {
  return {
    type: GET_DEPARTMENTS_FAIL,
    error,
  };
}

export function getAssets() {
  return {
    type: GET_ASSETS,
  };
}

export function getAssetsSuccess(assets) {
  return {
    type: GET_ASSETS_SUCCESS,
    assets,
  };
}

export function getAssetsFail(error) {
  return {
    type: GET_ASSETS_FAIL,
    error,
  };
}

export function addEmployee(employeeInfo) {
  return {
    type: ADD_EMPLOYEE,
    employeeInfo,
  };
}

export function addEmployeeSuccess(employee) {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    employee,
  };
}

export function addEmployeeFail(error) {
  return {
    type: ADD_EMPLOYEE_FAIL,
    error,
  };
}

export function deleteEntry(entry) {
  return {
    type: DELETE_ENTRY,
    entry,
  };
}
