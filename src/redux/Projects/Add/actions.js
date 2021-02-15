import {
    RESET_REDUCER,
    UPDATE_VALUE,
    ADD_PROJECT,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAIL,
    GET_EMPLOYEES,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_FAIL,
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
  
  export function addProject(projectInfo) {
    return {
      type: ADD_PROJECT,
      projectInfo,
    };
  }
  
  export function addProjectSuccess(project) {
    return {
      type: ADD_PROJECT_SUCCESS,
      project,
    };
  }
  
  export function addProjectFail(error) {
    return {
      type: ADD_PROJECT_FAIL,
      error,
    };
  }

  export function getEmployees() {
    return {
      type: GET_EMPLOYEES,
    };
  }
  
  export function getEmployeesSuccess(employees) {
    return {
      type: GET_EMPLOYEES_SUCCESS,
      employees,
    };
  }
  
  export function getEmployeesFail(error) {
    return {
      type: GET_EMPLOYEES_FAIL,
      error,
    };
  }
  