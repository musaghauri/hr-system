import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  headings: [
    {
      label: 'Title',
      name: 'title',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Delete',
      name: 'delete',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  announcements: {
    items: [],
    total_count: 0,
  },
  getAnnouncementsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteAnnouncementStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function announcementsListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_ANNOUNCEMENT:
      return state
        .setIn(['deleteAnnouncementStatus', 'loading'], true)
        .setIn(['deleteAnnouncementStatus', 'loaded'], false)
        .setIn(['deleteAnnouncementStatus', 'error'], false);
    case DELETE_ANNOUNCEMENT_SUCCESS:
      return state
        .setIn(['deleteAnnouncementStatus', 'loading'], false)
        .setIn(['deleteAnnouncementStatus', 'loaded'], true)
        .setIn(['deleteAnnouncementStatus', 'error'], false)
        .deleteIn(['announcements', 'items', action.index]);
    case DELETE_ANNOUNCEMENT_FAIL:
      return state
        .setIn(['deleteAnnouncementStatus', 'loading'], false)
        .setIn(['deleteAnnouncementStatus', 'loaded'], false)
        .setIn(['deleteAnnouncementStatus', 'error'], action.error);
    case GET_ANNOUNCEMENTS:
      return state
        .setIn(['getAnnouncementsStatus', 'loading'], true)
        .setIn(['getAnnouncementsStatus', 'loaded'], false)
        .setIn(['getAnnouncementsStatus', 'error'], false);
    case GET_ANNOUNCEMENTS_SUCCESS:
      return state
        .setIn(['getAnnouncementsStatus', 'loading'], false)
        .setIn(['getAnnouncementsStatus', 'loaded'], true)
        .setIn(['getAnnouncementsStatus', 'error'], false)
        .set('announcements', fromJS(action.announcements));
    case GET_ANNOUNCEMENTS_FAIL:
      return state
        .setIn(['getAnnouncementsStatus', 'loading'], false)
        .setIn(['getAnnouncementsStatus', 'loaded'], false)
        .setIn(['getAnnouncementsStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default announcementsListReducer;
