import {
    RESET_REDUCER,
    UPDATE_VALUE,
    GET_WISH,
    GET_WISH_SUCCESS,
    GET_WISH_FAIL,
    EDIT_WISH,
    EDIT_WISH_SUCCESS,
    EDIT_WISH_FAIL,
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
  
  export function getWish(id) {
    return {
      type: GET_WISH,
      id,
    };
  }
  
  export function getWishSuccess(wish) {
    return {
      type: GET_WISH_SUCCESS,
      wish,
    };
  }
  
  export function getWishFail(error) {
    return {
      type: GET_WISH_FAIL,
      error,
    };
  }
  
  export function editWish(wishInfo, id) {
    return {
      type: EDIT_WISH,
      wishInfo,
      id,
    };
  }
  
  export function editWishSuccess(wish) {
    return {
      type: EDIT_WISH_SUCCESS,
      wish,
    };
  }
  
  export function editWishFail(error) {
    return {
      type: EDIT_WISH_FAIL,
      error,
    };
  }
  