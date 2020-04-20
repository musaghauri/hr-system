import {
    RESET_REDUCER,
    UPDATE_VALUE,
    ADD_PRIORITY,
    ADD_PRIORITY_SUCCESS,
    ADD_PRIORITY_FAIL,
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
  
  export function addPriority(priorityInfo) {
    return {
      type: ADD_PRIORITY,
      priorityInfo,
    };
  }
  
  export function addPrioritySuccess(priority) {
    return {
      type: ADD_PRIORITY_SUCCESS,
      priority,
    };
  }
  
  export function addPriorityFail(error) {
    return {
      type: ADD_PRIORITY_FAIL,
      error,
    };
  }