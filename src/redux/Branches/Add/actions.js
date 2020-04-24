import {
    RESET_REDUCER,
    UPDATE_VALUE,
    ADD_BRANCH,
    ADD_BRANCH_SUCCESS,
    ADD_BRANCH_FAIL,
    GET_DEPARTMENTS,
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_FAIL,
    GET_CITIES,
    GET_CITIES_SUCCESS,
    GET_CITIES_FAIL,
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
  
  export function addBranch(branchInfo) {
    return {
      type: ADD_BRANCH,
      branchInfo,
    };
  }
  
  export function addBranchSuccess(branch) {
    return {
      type: ADD_BRANCH_SUCCESS,
      branch,
    };
  }
  
  export function addBranchFail(error) {
    return {
      type: ADD_BRANCH_FAIL,
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
  
  export function getCities() {
    return {
      type: GET_CITIES,
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
  