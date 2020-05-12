import {
    RESET_REDUCER,
    GET_BRANCH,
    GET_BRANCH_SUCCESS,
    GET_BRANCH_FAIL,
  } from './constants';
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
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
  