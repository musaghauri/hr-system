import {
    RESET_REDUCER,
    UPDATE_VALUE,
    DELETE_WISH,
    DELETE_WISH_SUCCESS,
    DELETE_WISH_FAIL,
    GET_WISHLIST,
    GET_WISHLIST_SUCCESS,
    GET_WISHLIST_FAIL,
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
  
  export function deleteWish(id, index) {
    return {
      type: DELETE_WISH,
      id,
      index,
    };
  }
  
  export function deleteWishSuccess(index) {
    return {
      type: DELETE_WISH_SUCCESS,
      index,
    };
  }
  
  export function deleteWishFail(error) {
    return {
      type: DELETE_WISH_FAIL,
      error,
    };
  }
  
  export function getWishlist() {
    return {
      type: GET_WISHLIST,
    };
  }
  
  export function getWishlistSuccess(wishlist) {
    return {
      type: GET_WISHLIST_SUCCESS,
      wishlist,
    };
  }
  
  export function getWishlistFail(error) {
    return {
      type: GET_WISHLIST_FAIL,
      error,
    };
  }
  