import {
    RESET_REDUCER,
    GET_PROJECT,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL,
  } from './constants';
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
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
  