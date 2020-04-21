import {
    RESET_REDUCER,
    UPDATE_VALUE,
    GET_ANNOUNCEMENT,
    GET_ANNOUNCEMENT_SUCCESS,
    GET_ANNOUNCEMENT_FAIL,
    EDIT_ANNOUNCEMENT,
    EDIT_ANNOUNCEMENT_SUCCESS,
    EDIT_ANNOUNCEMENT_FAIL,
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
  
  export function editAnnouncement(announcementInfo, id) {
    return {
      type: EDIT_ANNOUNCEMENT,
      announcementInfo,
      id,
    };
  }
  
  export function editAnnouncementSuccess(announcement) {
    return {
      type: EDIT_ANNOUNCEMENT_SUCCESS,
      announcement,
    };
  }
  
  export function editAnnouncementFail(error) {
    return {
      type: EDIT_ANNOUNCEMENT_FAIL,
      error,
    };
  }
  