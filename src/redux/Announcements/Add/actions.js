import {
    RESET_REDUCER,
    UPDATE_VALUE,
    ADD_ANNOUNCEMENT,
    ADD_ANNOUNCEMENT_SUCCESS,
    ADD_ANNOUNCEMENT_FAIL,
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
  
  export function addAnnouncement(announcementInfo) {
    return {
      type: ADD_ANNOUNCEMENT,
      announcementInfo,
    };
  }
  
  export function addAnnouncementSuccess(announcement) {
    return {
      type: ADD_ANNOUNCEMENT_SUCCESS,
      announcement,
    };
  }
  
  export function addAnnouncementFail(error) {
    return {
      type: ADD_ANNOUNCEMENT_FAIL,
      error,
    };
  }
  