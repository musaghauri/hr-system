import {
    RESET_REDUCER,
    GET_DEPARTMENT,
    GET_DEPARTMENT_SUCCESS,
    GET_DEPARTMENT_FAIL,
  } from './constants';
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
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
  