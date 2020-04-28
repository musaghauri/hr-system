import {
    RESET_REDUCER,
    UPDATE_VALUE,
    DELETE_ANNOUNCEMENT,
    DELETE_ANNOUNCEMENT_SUCCESS,
    DELETE_ANNOUNCEMENT_FAIL,
    GET_ANNOUNCEMENTS,
    GET_ANNOUNCEMENTS_SUCCESS,
    GET_ANNOUNCEMENTS_FAIL,
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
  
  export function deleteAnnouncement(id, index) {
    return {
      type: DELETE_ANNOUNCEMENT,
      id,
      index,
    };
  }
  
  export function deleteAnnouncementSuccess(index) {
    return {
      type: DELETE_ANNOUNCEMENT_SUCCESS,
      index,
    };
  }
  
  export function deleteAnnouncementFail(error) {
    return {
      type: DELETE_ANNOUNCEMENT_FAIL,
      error,
    };
  }
  
  export function getAnnouncements() {
    return {
      type: GET_ANNOUNCEMENTS,
    };
  }
  
  export function getAnnouncementsSuccess(announcements) {
    return {
      type: GET_ANNOUNCEMENTS_SUCCESS,
      announcements,
    };
  }
  
  export function getAnnouncementsFail(error) {
    return {
      type: GET_ANNOUNCEMENTS_FAIL,
      error,
    };
  }
  