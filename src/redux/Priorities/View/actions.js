import {
    RESET_REDUCER,
    GET_PRIORITY,
    GET_PRIORITY_SUCCESS,
    GET_PRIORITY_FAIL,
  } from './constants';
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
    };
  }
  
  export function getPriority(id) {
    return {
      type: GET_PRIORITY,
      id,
    };
  }
  
  export function getPrioritySuccess(priority) {
    return {
      type: GET_PRIORITY_SUCCESS,
      priority,
    };
  }
  
  export function getPriorityFail(error) {
    return {
      type: GET_PRIORITY_FAIL,
      error,
    };
  }
  