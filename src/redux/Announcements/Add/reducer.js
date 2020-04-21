import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ANNOUNCEMENT,
  ADD_ANNOUNCEMENT_SUCCESS,
  ADD_ANNOUNCEMENT_FAIL,
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
  addAnnouncementStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addAnnouncementReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_ANNOUNCEMENT:
      return state
        .setIn(['addAnnouncementStatus', 'loading'], true)
        .setIn(['addAnnouncementStatus', 'loaded'], false)
        .setIn(['addAnnouncementStatus', 'error'], false);
    case ADD_ANNOUNCEMENT_SUCCESS:
      return state
        .setIn(['addAnnouncementStatus', 'loading'], false)
        .setIn(['addAnnouncementStatus', 'loaded'], true)
        .setIn(['addAnnouncementStatus', 'error'], false);
    case ADD_ANNOUNCEMENT_FAIL:
      return state
        .setIn(['addAnnouncementStatus', 'loading'], false)
        .setIn(['addAnnouncementStatus', 'loaded'], false)
        .setIn(['addAnnouncementStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addAnnouncementReducer;
