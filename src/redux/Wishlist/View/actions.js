import {
    RESET_REDUCER,
    GET_WISH,
    GET_WISH_SUCCESS,
    GET_WISH_FAIL,
  } from './constants';
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
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
  