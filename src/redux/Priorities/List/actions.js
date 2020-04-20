import {
    RESET_REDUCER,
    UPDATE_VALUE,
    DELETE_PRIORITY,
    DELETE_PRIORITY_SUCCESS,
    DELETE_PRIORITY_FAIL,
    GET_PRIORITIES,
    GET_PRIORITIES_SUCCESS,
    GET_PRIORITIES_FAIL,
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
  
  export function deletePriority(id, index) {
    return {
      type: DELETE_PRIORITY,
      id,
      index,
    };
  }
  
  export function deletePrioritySuccess(index) {
    return {
      type: DELETE_PRIORITY_SUCCESS,
      index,
    };
  }
  
  export function deletePriorityFail(error) {
    return {
      type: DELETE_PRIORITY_FAIL,
      error,
    };
  }
  
  export function getPriorities() {
    return {
      type: GET_PRIORITIES,
    };
  }
  
  export function getPrioritiesSuccess(priorities) {
    return {
      type: GET_PRIORITIES_SUCCESS,
      priorities,
    };
  }
  
  export function getPrioritiesFail(error) {
    return {
      type: GET_PRIORITIES_FAIL,
      error,
    };
  }
  