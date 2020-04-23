import {
    RESET_REDUCER,
    UPDATE_VALUE,
    DELETE_DEPARTMENT,
    DELETE_DEPARTMENT_SUCCESS,
    DELETE_DEPARTMENT_FAIL,
    GET_DEPARTMENTS,
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_FAIL,
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
  
  export function deleteDepartment(id, index) {
    return {
      type: DELETE_DEPARTMENT,
      id,
      index,
    };
  }
  
  export function deleteDepartmentSuccess(index) {
    return {
      type: DELETE_DEPARTMENT_SUCCESS,
      index,
    };
  }
  
  export function deleteDepartmentFail(error) {
    return {
      type: DELETE_DEPARTMENT_FAIL,
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
  