import {
    RESET_REDUCER,
    UPDATE_VALUE,
    ADD_WISH,
    ADD_WISH_SUCCESS,
    ADD_WISH_FAIL,
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
  
  export function addWish(wishInfo) {
    return {
      type: ADD_WISH,
      wishInfo,
    };
  }
  
  export function addWishSuccess(wish) {
    return {
      type: ADD_WISH_SUCCESS,
      wish,
    };
  }
  
  export function addWishFail(error) {
    return {
      type: ADD_WISH_FAIL,
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