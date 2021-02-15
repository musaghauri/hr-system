import {
    RESET_REDUCER,
    UPDATE_VALUE,
    GET_PROJECT,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,
    EDIT_PROJECT,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_FAIL,
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
  
  export function getProject(id) {
    return {
      type: GET_PROJECT,
      id,
    };
  }
  
  export function getProjectSuccess(project) {
    return {
      type: GET_PROJECT_SUCCESS,
      project,
    };
  }
  
  export function getProjectFail(error) {
    return {
      type: GET_PROJECT_FAIL,
      error,
    };
  }
  
  export function editProject(projectInfo, id) {
    return {
      type: EDIT_PROJECT,
      projectInfo,
      id,
    };
  }
  
  export function editProjectSuccess(project) {
    return {
      type: EDIT_PROJECT_SUCCESS,
      project,
    };
  }
  
  export function editProjectFail(error) {
    return {
      type: EDIT_PROJECT_FAIL,
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