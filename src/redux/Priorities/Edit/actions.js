import {
    RESET_REDUCER,
    UPDATE_VALUE,
    GET_PRIORITY,
    GET_PRIORITY_SUCCESS,
    GET_PRIORITY_FAIL,
    EDIT_PRIORITY,
    EDIT_PRIORITY_SUCCESS,
    EDIT_PRIORITY_FAIL,
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
  
  export function editPriority(priorityInfo, id) {
    return {
      type: EDIT_PRIORITY,
      priorityInfo,
      id,
    };
  }
  
  export function editPrioritySuccess(priority) {
    return {
      type: EDIT_PRIORITY_SUCCESS,
      priority,
    };
  }
  
  export function editPriorityFail(error) {
    return {
      type: EDIT_PRIORITY_FAIL,
      error,
    };
  }
  