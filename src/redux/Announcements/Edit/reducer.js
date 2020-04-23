import { fromJS } from 'immutable';
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

export const initialState = fromJS({
  formDetails: {
    title: {
      name: 'title',
      label: 'Title',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'title',
      placeholder: 'Enter announcement title',
    },
    description: {
      name: 'description',
      label: 'Description',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'description',
      placeholder: 'Enter description',
      type: 'description',
    },
  },
  getAnnouncementStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editAnnouncementStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editAnnouncementReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
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
        .setIn(['formDetails'], fromJS(action.announcement));
    case GET_ANNOUNCEMENT_FAIL:
      return state
        .setIn(['getAnnouncementStatus', 'loading'], false)
        .setIn(['getAnnouncementStatus', 'loaded'], false)
        .setIn(['getAnnouncementStatus', 'error'], action.error);
    case EDIT_ANNOUNCEMENT:
      return state
        .setIn(['editAnnouncementStatus', 'loading'], true)
        .setIn(['editAnnouncementStatus', 'loaded'], false)
        .setIn(['editAnnouncementStatus', 'error'], false);
    case EDIT_ANNOUNCEMENT_SUCCESS:
      return state
        .setIn(['editAnnouncementStatus', 'loading'], false)
        .setIn(['editAnnouncementStatus', 'loaded'], true)
        .setIn(['editAnnouncementStatus', 'error'], false);
    case EDIT_ANNOUNCEMENT_FAIL:
      return state
        .setIn(['editAnnouncementStatus', 'loading'], false)
        .setIn(['editAnnouncementStatus', 'loaded'], false)
        .setIn(['editAnnouncementStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editAnnouncementReducer;
