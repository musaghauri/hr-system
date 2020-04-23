import {
    RESET_REDUCER,
    GET_ANNOUNCEMENT,
    GET_ANNOUNCEMENT_SUCCESS,
    GET_ANNOUNCEMENT_FAIL,
  } from './constants';
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
    };
  }
  
  export function getAnnouncement(id) {
    return {
      type: GET_ANNOUNCEMENT,
      id,
    };
  }
  
  export function getAnnouncementSuccess(announcement) {
    return {
      type: GET_ANNOUNCEMENT_SUCCESS,
      announcement,
    };
  }
  
  export function getAnnouncementFail(error) {
    return {
      type: GET_ANNOUNCEMENT_FAIL,
      error,
    };
  }
  