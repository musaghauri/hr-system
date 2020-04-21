import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_ANNOUNCEMENT,
  GET_ANNOUNCEMENT_SUCCESS,
  GET_ANNOUNCEMENT_FAIL,
} from './constants';

export const initialState = fromJS({
  announcement: {},

  getAnnouncementStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewAnnouncementReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_ANNOUNCEMENT:
      return state
        .setIn(['getAnnouncementStatus', 'loading'], true)
        .setIn(['getAnnouncementStatus', 'loaded'], false)
        .setIn(['getAnnouncementStatus', 'error'], false);
    case GET_ANNOUNCEMENT_SUCCESS:
      return state
        .setIn(['getAnnouncementStatus', 'loading'], false)
        .setIn(['getAnnouncementStatus', 'loaded'], true)
        .setIn(['getAnnouncementStatus', 'error'], false)
        .set('announcement', fromJS(action.announcement));
    case GET_ANNOUNCEMENT_FAIL:
      return state
        .setIn(['getAnnouncementStatus', 'loading'], false)
        .setIn(['getAnnouncementStatus', 'loaded'], false)
        .setIn(['getAnnouncementStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewAnnouncementReducer;
