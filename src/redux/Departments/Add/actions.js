import {
    RESET_REDUCER,
    UPDATE_VALUE,
    ADD_DEPARTMENT,
    ADD_DEPARTMENT_SUCCESS,
    ADD_DEPARTMENT_FAIL,
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
  
  export function addDepartment(departmentInfo) {
    return {
      type: ADD_DEPARTMENT,
      departmentInfo,
    };
  }
  
  export function addDepartmentSuccess(department) {
    return {
      type: ADD_DEPARTMENT_SUCCESS,
      department,
    };
  }
  
  export function addDepartmentFail(error) {
    return {
      type: ADD_DEPARTMENT_FAIL,
      error,
    };
  }
  