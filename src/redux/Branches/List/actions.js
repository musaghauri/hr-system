import {
    RESET_REDUCER,
    UPDATE_VALUE,
    DELETE_BRANCH,
    DELETE_BRANCH_SUCCESS,
    DELETE_BRANCH_FAIL,
    GET_BRANCHES,
    GET_BRANCHES_SUCCESS,
    GET_BRANCHES_FAIL,
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
  
  export function deleteBranch(id, index) {
    return {
      type: DELETE_BRANCH,
      id,
      index,
    };
  }
  
  export function deleteBranchSuccess(index) {
    return {
      type: DELETE_BRANCH_SUCCESS,
      index,
    };
  }
  
  export function deleteBranchFail(error) {
    return {
      type: DELETE_BRANCH_FAIL,
      error,
    };
  }
  
  export function getBranches() {
    return {
      type: GET_BRANCHES,
    };
  }
  
  export function getBranchesSuccess(branches) {
    return {
      type: GET_BRANCHES_SUCCESS,
      branches,
    };
  }
  
  export function getBranchesFail(error) {
    return {
      type: GET_BRANCHES_FAIL,
      error,
    };
  }