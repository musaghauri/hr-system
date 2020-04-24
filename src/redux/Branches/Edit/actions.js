import {
    RESET_REDUCER,
    UPDATE_VALUE,
    GET_BRANCH,
    GET_BRANCH_SUCCESS,
    GET_BRANCH_FAIL,
    EDIT_BRANCH,
    EDIT_BRANCH_SUCCESS,
    EDIT_BRANCH_FAIL,
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
  
  export function getBranch(id) {
    return {
      type: GET_BRANCH,
      id,
    };
  }
  
  export function getBranchSuccess(branch) {
    return {
      type: GET_BRANCH_SUCCESS,
      branch,
    };
  }
  
  export function getBranchFail(error) {
    return {
      type: GET_BRANCH_FAIL,
      error,
    };
  }
  
  export function editBranch(branchInfo, id) {
    return {
      type: EDIT_BRANCH,
      branchInfo,
      id,
    };
  }
  
  export function editBranchSuccess(branch) {
    return {
      type: EDIT_BRANCH_SUCCESS,
      branch,
    };
  }
  
  export function editBranchFail(error) {
    return {
      type: EDIT_BRANCH_FAIL,
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
  