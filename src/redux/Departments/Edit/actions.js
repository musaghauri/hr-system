import {
    RESET_REDUCER,
    UPDATE_VALUE,
    GET_DEPARTMENT,
    GET_DEPARTMENT_SUCCESS,
    GET_DEPARTMENT_FAIL,
    EDIT_DEPARTMENT,
    EDIT_DEPARTMENT_SUCCESS,
    EDIT_DEPARTMENT_FAIL,
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
  
  export function getDepartment(id) {
    return {
      type: GET_DEPARTMENT,
      id,
    };
  }
  
  export function getDepartmentSuccess(department) {
    return {
      type: GET_DEPARTMENT_SUCCESS,
      department,
    };
  }
  
  export function getDepartmentFail(error) {
    return {
      type: GET_DEPARTMENT_FAIL,
      error,
    };
  }
  
  export function editDepartment(departmentInfo, id) {
    return {
      type: EDIT_DEPARTMENT,
      departmentInfo,
      id,
    };
  }
  
  export function editDepartmentSuccess(department) {
    return {
      type: EDIT_DEPARTMENT_SUCCESS,
      department,
    };
  }
  
  export function editDepartmentFail(error) {
    return {
      type: EDIT_DEPARTMENT_FAIL,
      error,
    };
  }
  